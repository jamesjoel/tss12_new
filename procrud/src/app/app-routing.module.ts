import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FatherComponent } from './father/father.component';



const routes: Routes = [
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "father",
    component : FatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
