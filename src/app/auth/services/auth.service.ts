import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthResponse, RegisterResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';
import { catchError, map, Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { __param } from 'tslib';
type AuthStatus='checking'|'authenticated'|'not-authenticated';
const baseUrl=environment.baseURL
@Injectable({providedIn: 'root'})
export class AuthService {
  private _authStatus =signal<AuthStatus>('checking');
  private _user=signal<User|null>(null);
  private _token=signal<string|null>(localStorage.getItem('token'));
  private http=inject(HttpClient);





/* constructor() {
  const token = localStorage.getItem('token');

  if (token) {
    this.checkStatus().subscribe({
      next: (isValid) => {
        if (isValid) {
          this._authStatus.set('authenticated');
          console.log('Token válido, usuario autenticado');
        } else {
          this.logout();
          console.log('Token inválido, usuario no autenticado');
        }
      },
      error: (err) => {
        console.error('Error en checkStatus inicial:', err);
        this.logout();
      }
    });
  } else {
    this._authStatus.set('not-authenticated');
  }
}


 */




 /*  initAuthCheck(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.checkStatus().subscribe();
    } else {
      this._authStatus.set('not-authenticated');
    }
  } */



/*
  constructor() {
    effect(() => {
      this.checkStatus().subscribe(); // dispara la verificación inicial
    });
  } */





  checkStatusResource = resource({
  loader: async () => {
    return await this.checkStatus();
  }

});






  authStatus=computed<AuthStatus>(()=>{
    if(this._authStatus()=='checking')return'checking'
    if(this._user()) return'authenticated'
    return 'not-authenticated'
  });
  user=computed<User|null>(()=>this._user());
  token=computed(this._token);
  isAdmin=computed(()=>this._user()?.roles.includes('admin')?? false)
  Login(email:string,password:string):Observable<boolean>{
    return this.http.post<AuthResponse>(`${baseUrl}/auth/login`,{
      email:email,
      password:password,
    }).pipe(map(resp=>this.handleAuthSuccess(resp)),
      catchError((error:any)=>this.handleAuthError(error))
    )
  }
  Register(email:string,password:string,name:string):Observable<boolean>{
    return this.http.post<RegisterResponse>(`${baseUrl}/auth/register`,{
      email:email,
      password:password,
      fullName:name,
    }).pipe(map(resp=>this.handleAuthSuccess(resp)),
      catchError((error:any)=>this.handleAuthError(error))
    )
  }

   checkStatus():Observable<boolean>{
    const token=localStorage.getItem('token');
    if(!token){
      this.logout();
      return of(false);
    }
    console.log(token);
    return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`,{
       headers:{
        Authorization:`Bearer${token}`,
      }
    }).pipe(
      map(resp=>this.handleAuthSuccess(resp)),
      catchError((error:any)=>this.handleAuthError(error))
    )
  }


  logout(){
    this._authStatus.set('not-authenticated');
    this._token.set(null);
    this._user.set(null);
    localStorage.removeItem('token');
  }
  private handleAuthSuccess({token,user}:AuthResponse){
    this._user.set(user);
        this._authStatus.set('authenticated');
        this._token.set(token)
        localStorage.setItem('token',token);
        return(true);
  }
  private handleAuthError(error:any){
    this.logout();
    return of(false);
  }
}/*
function resourse(arg0: { loader: () => () => Observable<boolean>; }) {
  throw new Error('Function not implemented.');
}
 */
