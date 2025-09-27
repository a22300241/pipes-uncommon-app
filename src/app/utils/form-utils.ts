import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
   static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
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
        case'email':
          return 'El valor debe de ser un email válido';
        case 'pattern':
          if(errors['pattern'].requiredPattern==FormUtils.namePattern){
            return 'El correo electronico no es valido';
          }
        return 'Error en patron contra expresion regular';
        default:
          return `Error desconocido ${key}`;
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
  static idFieldOneEqualsFieldTwo(field1:string, field2:string){
    return(formGroup:AbstractControl)=>{
      const field1Value=formGroup.get(field1)?.value;
      const field2Value=formGroup.get(field2)?.value;
      return field1Value==field2Value ? null:{passwordsNotEqual:true};
    };
  }
}
