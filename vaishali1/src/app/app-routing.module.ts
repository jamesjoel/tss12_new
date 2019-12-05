import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

{ 
  path : "",
  component : HomeComponent
},

{
  path :"Product",
  component : ProductComponent
},
{
  path :"About",
  component : AboutComponent
},
{
  path : "Contact",
  component : ContactComponent
},
{
  path : "Services",
  component : ServicesComponent
},
{
  path : "Help",
  component : HelpComponent
},
{
  path : "**",
  component : NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
