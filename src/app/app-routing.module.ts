import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NewreservationComponent } from './newreservation/newreservation.component';
import { BuComponent } from './bu/bu.component';

const routes: Routes = [
  {path:"home", component:HomeComponent, 
    children:[
      {path:"foglalasok", component:ReservationsComponent},
      {path:"ujfoglalas", component:NewreservationComponent},
    ]
  },
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"bu", component:BuComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
