import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { Note } from "../shared/models/note";
import {BoardsService} from "../boards.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  noteDescription: String = this.data.note.description;
  noteTitle: String = this.data.note.title;
  hideDescriptionForm: boolean = true;
  hideTitleForm: boolean = true;

  constructor(
    private boardsService: BoardsService,
    @Inject(MD_DIALOG_DATA) public data) { }

  deleteNote(){
    this.boardsService.deleteNote(this.data.boardId, this.data.note);
  }

  showDescriptionForm(){
    this.hideDescriptionForm = false;
  }

  showTitleForm(){
    this.hideTitleForm = false;
  }

  addDescription(){
    this.data.note.description = this.noteDescription;
    this.hideDescriptionForm = true;
  }

  editTitle(){
    this.data.note.title = this.noteTitle;
    this.hideTitleForm = true;
  }


  ngOnInit() {
  }

}
