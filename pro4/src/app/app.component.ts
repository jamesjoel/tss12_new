import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { KidsComponent } from './kids/kids.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  // constructor(private _ref : ChangeDetectorRef){}
  title = 'pro4';

  @ViewChild(KidsComponent, { static : false }) x;
  a:string="";
  b:string;

  ngAfterViewInit(){
    // console.log(this.x.name);
    this.a = this.x.name;
    // this._ref.detectChanges();
  }
  demo2(z){
    // console.log(z);
    this.b=z;
  }


}
