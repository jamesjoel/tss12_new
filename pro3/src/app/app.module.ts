import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { DemoComponent } from './demo/demo.component';
import { FatherComponent } from './father/father.component';
import { KidsComponent } from './kids/kids.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DemoComponent,
    FatherComponent,
    KidsComponent
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
