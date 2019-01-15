import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkListPageComponent } from './pages/link-list.page.component';
import { LinkDetailsPageComponent } from './pages/link-details.page.component';

const routes: Routes = [
  { path: '', component: LinkListPageComponent },
  { path: ':id', component: LinkDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
