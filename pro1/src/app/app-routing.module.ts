import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GmapComponent  } from './gmap/gmap.component';

const routes: Routes = [
  {
    path : "gmap",
    component : GmapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
