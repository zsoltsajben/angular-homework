import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/components/layout/layout.component';
// import { LinksModule } from './links/links.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => CoreModule
  },
  {
    path: 'links',
    component: LayoutComponent,
    loadChildren: './links/links.module#LinksModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
