import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenHeaderAppenderInterceptor } from './interceptors/auth-token-header-appender.interceptor';
import { HeaderLoggerInterceptor } from './interceptors/header-logger.interceptor';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenHeaderAppenderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderLoggerInterceptor, multi: true }
  ]
})
export class CoreRoutingModule { }
