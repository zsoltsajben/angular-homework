import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenHeaderAppenderInterceptor } from './interceptors/auth-token-header-appender.interceptor';
import { HeaderLoggerInterceptor } from './interceptors/header-logger.interceptor';
import { FakeBackendInterceptor } from './interceptors/fake-backend.interceptor';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenHeaderAppenderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderLoggerInterceptor, multi: true },

    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    /*
      This interceptor did not work when it was in the links module, maybe it was registered too late as only
        the other two were called.
      Note: Even the docs (https://angular.io/guide/http#setup-installing-the-module) seem to be off:
        "Because interceptors are (optional) dependencies of the HttpClient service, you must provide them in
        the same injector (or a parent of the injector) that provides HttpClient. Interceptors provided after
        DI creates the HttpClient are ignored."
    */
  ]
})
export class CoreRoutingModule { }
