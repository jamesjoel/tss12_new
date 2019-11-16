import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FatherComponent } from './father/father.component';
import { KidsComponent } from './kids/kids.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FatherComponent,
    KidsComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
