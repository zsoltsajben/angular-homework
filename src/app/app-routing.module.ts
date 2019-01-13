import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'asd', loadChildren: () => CoreModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
