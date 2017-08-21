import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdButtonModule, MdMenuModule, MdIconModule, MdAutocompleteModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdAutocompleteModule
  ],
  exports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdAutocompleteModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
