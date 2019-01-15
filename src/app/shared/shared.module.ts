import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './components/likes/likes.component';

@NgModule({
  declarations: [
    LikesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikesComponent
  ]
})
export class SharedModule { }
