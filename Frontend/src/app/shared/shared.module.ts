import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtractTheSetPipe } from './pipes/extract-the-set.pipe';
import { FullSetPipe } from './pipes/full-set.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    ExtractTheSetPipe,
    FullSetPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    ExtractTheSetPipe,
    FullSetPipe,
  ]
})
export class SharedModule { }
