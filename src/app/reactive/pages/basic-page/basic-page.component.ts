import { isValid } from './../../../../../node_modules/zod/src/v3/helpers/parseUtil';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  private fb=inject(FormBuilder)
  myForm:FormGroup=this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)],],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })
  //myForm = new FormGroup({
  //  name: new FormControl(''),
  //  price: new FormControl(0),
  //  inStorage: new FormControl(0),
  //})
  isValidField(fildName:string):boolean|null{
    return !!this.myForm.controls[fildName].errors
  }
  getFieldError(fildName:string):string|null{
    if(!this.myForm.controls[fildName]) return null;
    const errors=this.myForm.controls[fildName].errors || {};
    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}.`;
      }
    }
    return null;
  }
 }
