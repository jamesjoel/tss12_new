import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class MydirDirective {

  constructor(private ele : ElementRef) { }
  
  ngOnInit(){
    // console.log(this.ele.nativeElement.innerHTML);
    this.ele.nativeElement.style.backgroundColor="red";
    this.ele.nativeElement.style.fontSize = "25px";
    // console.log(this.ele.nativeElement);
    
  }
  @HostListener('click') onclick() {
    //window.alert('Host Element Clicked');
  }
  @HostListener('mouseover') onmouseover(){
    // window.alert(" sdfg sdfg sdfg sdfg sdgdfg");
    this.ele.nativeElement.style.backgroundColor="green";
  }
  @HostListener('mouseout') onmouseout(){
    this.ele.nativeElement.style.backgroundColor="red";
  }

}
