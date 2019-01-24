import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LinksRoutingModule } from './links-routing.module';
import { LinkDetailsPageComponent } from './pages/link-details.page.component';
import { LinkListPageComponent } from './pages/link-list.page.component';
import { SharedModule } from '../shared/shared.module';
import { LinksApiClientService } from './clients/links-api-client.service';
import { AuthGuard } from '../core/guards/auth.guard';

import { FakeBackendInterceptor } from './interceptors/fake-backend.interceptor';
import { AuthTokenHeaderAppenderInterceptor } from './interceptors/auth-token-header-appender.interceptor';

@NgModule({
  declarations: [
    LinkDetailsPageComponent,
    LinkListPageComponent
  ],
  imports: [
    CommonModule,
    LinksRoutingModule,
    SharedModule
  ],
  providers: [
    LinksApiClientService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenHeaderAppenderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
  ]
})
export class LinksModule { }
