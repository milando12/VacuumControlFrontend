import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DisplayUsersComponent} from "./components/displayusers/display-users.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {AuthGuard} from "./auth.guard";
import {SearchVacuumsComponent} from "./components/search-vacuums/search-vacuums.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "users",
    component: DisplayUsersComponent
  },
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-user/:email",
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "search",
    component: SearchVacuumsComponent
  },
  //TODO change when components are ready
  {
    path: "schedule-operations",
    component: SearchVacuumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
