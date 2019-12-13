import { AbstractControl } from '@angular/forms';


export function checkNumber(x : AbstractControl){
    if(isNaN(x.value)==true){

        return { abc : true };


    }
    else{
        return null;
    }
}