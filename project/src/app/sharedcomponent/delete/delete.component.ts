import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() employee:any;
  @Output() doDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.doDelete.emit();
  }

}
