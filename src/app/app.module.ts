import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { NoteComponent } from './note/note.component';
import { BoardsComponent } from './boards/boards.component';
import { AppRouterRoutingModule } from './app-router/app-router-routing.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BoardsService } from "./boards.service";
import { AppHeaderComponent } from './app-header/app-header.component';
import { NoteDialogComponent } from './note-dialog/note-dialog.component';
import { AutofocusDirective } from './autofocus.directive';
import { CreateFormComponent } from './create-form/create-form.component';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { MoveListDialogComponent } from './move-list-dialog/move-list-dialog.component';
import { MoveNoteDialogComponent } from './move-note-dialog/move-note-dialog.component';
import { ChecklistComponent } from './checklist/checklist.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    NoteComponent,
    BoardsComponent,
    AppHeaderComponent,
    NoteDialogComponent,
    AutofocusDirective,
    CreateFormComponent,
    EditableTextComponent,
    MoveListDialogComponent,
    MoveNoteDialogComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterRoutingModule,
    CustomMaterialModule,
    FormsModule,
    MdDialogModule,
    ReactiveFormsModule
  ],
  providers: [ BoardsService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    NoteDialogComponent,
    MoveListDialogComponent,
    MoveNoteDialogComponent
  ]
})
export class AppModule { }
