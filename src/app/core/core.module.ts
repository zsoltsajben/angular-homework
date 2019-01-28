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
import { MatDividerModule } from '@angular/material';

const materialModules = [
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    HomePageComponent,
    LayoutComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class CoreModule { }
