import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdButtonModule, MdMenuModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
