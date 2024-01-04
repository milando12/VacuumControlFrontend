import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DisplayusersComponent} from "./components/displayusers/displayusers.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "users",
    component: DisplayusersComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "edit-user",
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
