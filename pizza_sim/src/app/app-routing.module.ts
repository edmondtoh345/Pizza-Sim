import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  // { path: 'newarrivals', component: },
  { path: 'categories', component: CategoriesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'member', component: MemberComponent, canActivate:[AuthGuard]},


  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
