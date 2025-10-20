import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  fb=inject(FormBuilder)
  formUtils=FormUtils
  myForm=this.fb.group({
    name:['',[Validators.required, Validators.pattern(FormUtils.namePattern)]],
    email:['',[Validators.required, Validators.pattern(FormUtils.emailPattern)],[FormUtils.checkingServerResponse]],
    username:['',[Validators.required, Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern), FormUtils.nosStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',Validators.required],
  });




  hasError = signal(false)
  idPosting= signal(false)
  router=inject(Router);
  authService=inject(AuthService)
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    name:['',[Validators.required]],
  });
  onSubmit(){
    if(this.loginForm.invalid){
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      },2000);
      return
    }
    const{email='',password='',name=''}=this.loginForm.value;
    this.authService.Register(email!,password!,name!).subscribe(isAuthenticated=>{
      if(isAuthenticated){
        this.router.navigateByUrl('/');
        return
      }
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      },2000);
    })
  }
}
