import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from "./main/auth/login/login.component";
import { SignupComponent } from "./main/auth/signup/signup.component";
import {SupportComponent} from "./main/support/support.component";
import {BookmarksComponent} from "./main/bookmarks/bookmarks.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {StartedComponent} from "./main/started/started.component";
import {OwnersComponent} from "./main/owners/owners.component";
import {PartnersComponent} from "./main/partners/partners.component";

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

const mainRoutes: Routes = [
  { path: 'auth', children: authRoutes },
  { path: 'support', component: SupportComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'started', component: StartedComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'partners', component: PartnersComponent },
];

const routes: Routes = [
  { path: '', redirectTo: '/started', pathMatch: 'full'},
  { path: '', component: MainComponent, children: mainRoutes },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
