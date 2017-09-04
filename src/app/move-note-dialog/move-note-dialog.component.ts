import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MD_DIALOG_DATA } from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {Board} from "../shared/models/board";
import {BoardsService} from "../boards.service";
import {List} from "../shared/models/list";

@Component({
  selector: 'app-move-note-dialog',
  templateUrl: './move-note-dialog.component.html',
  styleUrls: ['./move-note-dialog.component.css']
})
export class MoveNoteDialogComponent implements OnInit {

  boards: Board[];
  selectedBoard;
  selectedList;
  lists: List[];

  constructor(
    private boardsService: BoardsService,
    public dialogRef: MdDialogRef<MoveNoteDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data
  ) {}

  getBoards(): void {
      this.boardsService.getBoards().subscribe(boards =>this.boards = boards);
  }

  showLists(event){
    this.lists = event.value.lists;
  }

  moveNote(){
    this.boardsService.moveNote(this.data.note, this.data.boardId, this.selectedList);
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getBoards();
  }
}
