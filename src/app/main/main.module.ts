import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { StartedComponent } from './started/started.component';
import { RequestComponent } from './started/request/request.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MainComponent } from './main.component';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from "../shared/material/material.module";
import { SupportComponent } from './support/support.component';
import { AppRoutingModule } from "../app-routing.module";
import { OwnersComponent } from './owners/owners.component';
import { PartnersComponent } from './partners/partners.component';
import { FiltersComponent } from './started/filters/filters.component';

@NgModule({
  declarations: [
    NavigationComponent,
    BookmarksComponent,
    StartedComponent,
    RequestComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    SupportComponent,
    OwnersComponent,
    PartnersComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule,
    AuthModule,
  ],
})
export class MainModule { }
