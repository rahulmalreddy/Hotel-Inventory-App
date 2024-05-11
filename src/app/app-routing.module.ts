import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomsAddComponent },
  { path: 'rooms/:roomid', component: RoomsBookingComponent },
  {path: 'form', component:FormComponentComponent},
  {path:'reactiveform', component:ReactiveFormComponentComponent},
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
