import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Mycomp/home/home.component';
import { LoginComponent } from './Mycomp/login/login.component';
import { PopupComponent } from './Mycomp/popup/popup.component';
import { RegistrationComponent } from './Mycomp/registration/registration.component';
import { UsercompComponent } from './Mycomp/usercomp/usercomp.component';
import { AuthGuard } from './guard/authguard.guard';

const routes: Routes = [
  {path:'',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'usercomp',component:UsercompComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
