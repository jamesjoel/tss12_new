import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try1-p-t-c';
  a:string;
  b:number;
 demo(){
   console.log(this.a + this.b);
 }

}
