import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject, InjectionToken } from "@angular/core";
import { AuthService } from "@auth/services/auth.service";

export function authInterceptor(
  req:HttpRequest<unknown>,
  next: HttpHandlerFn
){
  const token=inject(AuthService).token();
  const newReq=req.clone({
    headers:req.headers.append('Autorization',`bearer ${token}`),
  });
  return next(newReq)
}
