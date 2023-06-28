import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { NoteComponent } from './note/note.component';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [

  {component: WelcomeComponent, path: ''},
  
  {component: LoginComponent, path: 'login'},
  {component: WelcomeComponent, path: 'welcome'},
  {component: NoteComponent, path: 'note/:id', canActivate: [RouteGuardService]},
  {component: CreateNoteComponent, path: 'notec', canActivate: [RouteGuardService]},
  {component: WelcomeComponent, path: 'welcome/:username', canActivate: [RouteGuardService]},
  {component: NotesPageComponent, path: 'notes', canActivate: [RouteGuardService]},
  {component: LogoutComponent, path: 'logout', canActivate: [RouteGuardService]},


  {component: ErrorpageComponent, path: '**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
