import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  static getTextErrors(errors:ValidationErrors)
  {
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
  static isValidField(form:FormGroup, fildName:string):boolean|null{
    return (!!form.controls[fildName].errors && form.controls[fildName].touched)
  }
  static getFieldError(form:FormGroup,fildName:string):string|null{
    if(!form.controls[fildName]) return null;
    const errors=form.controls[fildName].errors || {};
    return this.getTextErrors(errors);
  }


   static isValidFieldInArray(formArray:FormArray,index:number){
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }
  static getFieldErrorInArray(formArray:FormArray,index:number):string|null{
    if(formArray.controls.length==0) return null;
    const errors=formArray.controls[index].errors ?? {};
    return this.getTextErrors(errors);
  }
}
