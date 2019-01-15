import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './components/likes/likes.component';
import { TrendingBooleanToFaiconPipe } from './pipes/trending-boolean-to-faicon.pipe';

@NgModule({
  declarations: [
    LikesComponent,
    TrendingBooleanToFaiconPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikesComponent,
    TrendingBooleanToFaiconPipe
  ]
})
export class SharedModule { }
