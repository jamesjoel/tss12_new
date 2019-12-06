import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonuse'
})
export class BonusePipe implements PipeTransform {

  transform(a, b, c){
    if(b=="male")
      var x = a*10/100;
    if(b=="female")
      var x = a*20/100;
    
    if(c<25){
      x += x * 10 / 100;
      
    }
    else{
      x += x * 20 / 100;

    }
    return x;
  }
  

}
