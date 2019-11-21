import { Component } from '@angular/core';
import { MyservService } from './services/myserv.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro5';
  a:number;
  b:number;
  x:string;
  constructor(private _myservice : MyservService){ }

  callMe(){
    var x =this._myservice.demo(this.a, this.b);
    this.x="Your Ans is "+x;
    
  }

}
