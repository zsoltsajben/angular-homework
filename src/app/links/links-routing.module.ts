import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkListPageComponent } from './pages/link-list.page.component';
import { LinkDetailsPageComponent } from './pages/link-details.page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LinkListPageComponent },
  { path: ':id', component: LinkDetailsPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
