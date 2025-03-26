import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

const routes:Routes = [
  {
    path:'',
    redirectTo: '/menu', pathMatch: 'full'
  },
  {
    path:"reservation",component: ReservationComponent, title:"Reservation"
  },
  {
    path:"menu",component: MenuComponent, title:"Menu"
  },
  {
    path:"our-story",component: MenuComponent, title:"Our story"
  },
  {
    path:"private-events",component: MenuComponent, title:"Private events"
  },
  {
    path:"Calendar",component: MenuComponent, title:"Calendar"
  },
  {
    path:"Press",component: MenuComponent, title:"Press"
  },
  
  {
    path:"login",component: LoginComponent, title:"Login"
  },
  {
    path:"**",component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
