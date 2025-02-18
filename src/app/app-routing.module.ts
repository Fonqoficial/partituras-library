// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { LibraryComponent } from './modules/library/library/library.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', redirectTo: '/library', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }