import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewEmployee } from '../../models/employee.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() sendData = new EventEmitter();
  @Input() employee:NewEmployee;

  constructor() { }

  ngOnInit() {
  }
  add(){
    this.sendData.emit(this.employee);
  }

}
