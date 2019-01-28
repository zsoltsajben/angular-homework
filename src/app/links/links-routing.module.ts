import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { LinkListPageComponent } from './pages/link-list.page.component';
import { LinkDetailsPageComponent } from './pages/link-details.page.component';
import { LinkCreatePageComponent } from './pages/link-create.page.component';
import { LinkEditPageComponent } from './pages/link-edit.page.component';

const routes: Routes = [
  { path: '', component: LinkListPageComponent },
  { path: 'create', component: LinkCreatePageComponent, canActivate: [AuthGuard] },
  { path: ':id', component: LinkDetailsPageComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: LinkEditPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
