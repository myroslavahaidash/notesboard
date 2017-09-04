import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdCheckboxModule,
  MdProgressBarModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdSelectModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdSelectModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
