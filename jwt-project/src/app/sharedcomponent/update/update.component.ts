import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserprofileService } from '../../services/userprofile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() user:User;
  @Output() confEdit = new EventEmitter();
  constructor(private _profile : UserprofileService) { }

  ngOnInit() {
  }
  update()
  {
    this._profile.updateUser(this.user).subscribe(data=>{
      this.confEdit.emit(this.user);
    });
  }

}
