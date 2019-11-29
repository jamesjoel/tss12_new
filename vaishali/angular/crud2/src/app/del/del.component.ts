import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.scss']
})
export class DelComponent implements OnInit {
n;
  constructor() { }

  ngOnInit() {
  }
 @Input() askDelete(a:Student){
  
    this.oneStudent=a;
  }
  @Input() delete(){
    let n = this.studentArr.indexOf(this.oneStudent);
    this.studentArr.splice(n, 1);
  }
}
