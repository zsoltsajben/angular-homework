import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LikesComponent } from './components/likes/likes.component';
import { TrendingBooleanToFaiconPipe } from './pipes/trending-boolean-to-faicon.pipe';
import { NotEqualsValidatorDirective } from './validators/not-equals.validator';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    LikesComponent,
    TrendingBooleanToFaiconPipe,
    NotEqualsValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    HttpClientModule
  ],
  exports: [
    LikesComponent,
    TrendingBooleanToFaiconPipe,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    HttpClientModule,
    NotEqualsValidatorDirective
  ]
})
export class SharedModule { }
