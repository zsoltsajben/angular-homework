import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { ChangedetectionPageComponent } from './pages/changedetection.page.component';
import { AnimationPageComponent } from './pages/animation.page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'changedetaction', component: ChangedetectionPageComponent },
  { path: 'animation', component: AnimationPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
