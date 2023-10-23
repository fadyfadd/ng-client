import { AbstractControl } from "@angular/forms";

export function RequiredValidtor(control:AbstractControl) : {[key:string]:string} | null{
   if (control.value.trim() == '')
        return {isEmpty:'Field cannot be Empty'}

        return null; 
}

export function isNumericValidator(control:AbstractControl) : {[key:string]:string} | null{
    if (control.value.trim() == '')
        return null;
 
      if (!control.value)
        return {isNotNumeric:'Field cannot be Numeric'}

      if (isNaN(control.value))
        return {isNotNumeric:'Field cannot be Numeric'}

        return null;
}


