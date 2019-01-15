import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LinksModule } from './links/links.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'links', loadChildren: () => LinksModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
