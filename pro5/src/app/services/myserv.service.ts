import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor() { }

  demo(a, b){
    
    // var c = a+b;
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
  }
}
