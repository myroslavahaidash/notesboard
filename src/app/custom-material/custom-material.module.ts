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
  MdSelectModule,
  MdSnackBarModule
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
    MdSelectModule,
    MdSnackBarModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdSelectModule,
    MdSnackBarModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
