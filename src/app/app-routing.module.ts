import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
{path:"nav", component:NavbarComponent},
{path:"footer", component:FooterComponent},
{path:'about',component:AboutComponent},
{path:'services',component:ServicesComponent},
{path:'contact',component:ContactComponent},
{path:'team',component:TeamComponent},
{ path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
