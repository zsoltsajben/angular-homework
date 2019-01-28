import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { AuthTokenHeaderAppenderInterceptor } from './interceptors/auth-token-header-appender.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenHeaderAppenderInterceptor, multi: true },
  ]
})
export class CoreRoutingModule { }
