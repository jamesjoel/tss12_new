import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'pro3';
  name:string="rohit";
  pData:number;
  x:number;


  childData(){
    this.pData=this.x;
  }


}
