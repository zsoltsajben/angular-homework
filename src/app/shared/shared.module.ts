import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './components/likes/likes.component';
import { TrendingBooleanToFaiconPipe } from './pipes/trending-boolean-to-faicon.pipe';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { NotEqualsValidatorDirective } from './validators/not-equals.validator';

@NgModule({
  declarations: [
    LikesComponent,
    TrendingBooleanToFaiconPipe,
    NotEqualsValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  exports: [
    LikesComponent,
    TrendingBooleanToFaiconPipe,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NotEqualsValidatorDirective
  ]
})
export class SharedModule { }
