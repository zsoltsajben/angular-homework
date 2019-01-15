import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinkDetailsPageComponent } from './pages/link-details.page.component';
import { LinkListPageComponent } from './pages/link-list.page.component';

@NgModule({
  declarations: [LinkDetailsPageComponent, LinkListPageComponent],
  imports: [
    CommonModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
