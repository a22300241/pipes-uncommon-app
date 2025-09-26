import { FormGroup } from "@angular/forms";

export class FormUtils {
  static isValidField(form:FormGroup, fildName:string):boolean|null{
    return (!!form.controls[fildName].errors && form.controls[fildName].touched)
  }
  static getFieldError(form:FormGroup,fildName:string):string|null{
    if(!form.controls[fildName]) return null;
    const errors=form.controls[fildName].errors || {};
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
