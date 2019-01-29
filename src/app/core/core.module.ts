import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { AnimationPageComponent } from './pages/animation.page.component';
import { ChangedetectionPageComponent } from './pages/changedetection.page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LayoutComponent,
    MenuComponent,
    LoginComponent,
    AnimationPageComponent,
    ChangedetectionPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class CoreModule { }
