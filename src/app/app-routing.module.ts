import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CoreModule } from './core/core.module';
// import { LinksModule } from './links/links.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'links', loadChildren: './links/links.module#LinksModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
