import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  // { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
  {path:'',component:HomeComponent},
{path:"nav", component:NavbarComponent},
{path:"footer", component:FooterComponent},
{path:'about',component:AboutComponent},
{path:'services',component:ServicesComponent},
{path:'contact',component:ContactComponent},
// { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
