import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() employee:Employee;
  @Output() doDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.doDelete.emit();
  }

}
