import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
