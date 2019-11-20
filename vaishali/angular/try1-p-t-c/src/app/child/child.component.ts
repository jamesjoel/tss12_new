import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @input()fName,
  constructor() { }

  ngOnInit() {
  }

}
