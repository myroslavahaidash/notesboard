import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Observable } from 'rxjs/Observable';

import {Board} from "../shared/models/board";
import {BoardsService} from "../boards.service";
import {boards} from "../shared/data";

@Component({
  selector: 'app-move-list-dialog',
  templateUrl: './move-list-dialog.component.html',
  styleUrls: ['./move-list-dialog.component.css']
})
export class MoveListDialogComponent implements OnInit {
  boards: Board[];
  selectedBoard: Board;

  constructor(
    private boardsService: BoardsService,
    public dialogRef: MdDialogRef<MoveListDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data
  ) { }

  getBoards(): void {
    this.boardsService.getBoard(this.data.list.boardId).subscribe(currentBoard =>
      this.boardsService.getBoards().subscribe(boards =>
        this.boards = boards.filter(board => board.id !== currentBoard.id)));
  }

  moveList(){
    this.boardsService.moveList(this.data.list, this.selectedBoard);
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getBoards();
  }
}
