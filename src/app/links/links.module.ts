import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinkDetailsPageComponent } from './pages/link-details.page.component';
import { LinkListPageComponent } from './pages/link-list.page.component';
import { SharedModule } from '../shared/shared.module';
import { LinksApiClientService } from './clients/links-api-client.service';
import { AuthGuard } from '../core/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './interceptors/fake-backend.interceptor';

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
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
  ]
})
export class LinksModule { }
