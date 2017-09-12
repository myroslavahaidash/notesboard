import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { MoveNoteDialogComponent } from "../move-note-dialog/move-note-dialog.component";

import { Note } from "../shared/models/note";
import {BoardsService} from "../boards.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.css']
})
export class NoteDialogComponent implements OnInit {
  constructor(
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    private boardsService: BoardsService,
    @Inject(MD_DIALOG_DATA) public data) { }

  deleteNote(){
    this.boardsService.deleteNote(this.data.boardId, this.data.note);
    this.snackBar.open('Note was deleted', '', {
      duration: 2000,
    });
  }

  deleteChecklist(checklist){
    this.boardsService.deleteChecklist(this.data.note, checklist);
  }

  copyNote(){
    this.boardsService.copyNote(this.data.note, this.data.boardId);
    this.snackBar.open('Copy of this note was created in the end of this list', '', {
      duration: 3000,
    });
  }

  editDescription(description) {
    this.data.note.description = description;
    this.boardsService.save();
  }

  editTitle(title) {
    this.data.note.title = title;
    this.boardsService.save();
  }

  addChecklist(title): void {
    this.boardsService.createChecklist(this.data.note, title);
  }

  openMoveNoteDialog(){
    let dialogRef = this.dialog.open(MoveNoteDialogComponent,
      {data: {
        note: this.data.note,
        boardId: this.data.boardId}
      });
  }

  ngOnInit() {
  }

}
