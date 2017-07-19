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
  constructor(
    private boardsService: BoardsService,
    @Inject(MD_DIALOG_DATA) public data) { }

  deleteNote(){
    this.boardsService.deleteNote(this.data.boardId, this.data.note);
  }

  editDescription(description) {
    this.data.note.description = description;
  }

  editTitle(title) {
    this.data.note.title = title;
  }

  ngOnInit() {
  }

}
