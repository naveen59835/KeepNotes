import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { NoteNotFoundComponent } from './note-not-found/note-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { LoginComponent } from './login/login.component';
import { ActivateGuard } from './activate.guard';
import { RegistrationComponent } from './registration/registration.component';
import { DeactiveGuard } from './deactive.guard';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"notes", component: DashboardComponent, canActivate:[ActivateGuard]},
  {path:"login", component:LoginComponent, canDeactivate:[DeactiveGuard] },
  {path:"registration",component:RegistrationComponent,canDeactivate:[DeactivateGuard]},
  {path:"edit-note/:id", component: EditNoteComponent},
  {path:"", redirectTo:"/home",pathMatch:'full'},
  {path:"**", component: NoteNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
