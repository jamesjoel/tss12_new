import { Component, OnInit, Input } from '@angular/core';
import { CommandName } from 'protractor';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  @Input() cName;
  @Input() cObj;


  constructor() { }

  ngOnInit() {
  }

}
