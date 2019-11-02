import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentResetpasswordComponent } from './student-resetpassword/student-resetpassword.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},

  {path:'admin-login',component:AdminLoginComponent},

  {
    path:'student-login',component:StudentLoginComponent
  },
  {
    path:'student/register',component:StudentRegisterComponent,
  },
  {
    path:'student/resetPassword',component:StudentResetpasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
