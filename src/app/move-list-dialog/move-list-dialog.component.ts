import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MD_DIALOG_DATA } from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {Board} from "../shared/models/board";
import {BoardsService} from "../boards.service";

@Component({
  selector: 'app-move-list-dialog',
  templateUrl: './move-list-dialog.component.html',
  styleUrls: ['./move-list-dialog.component.css']
})
export class MoveListDialogComponent implements OnInit {
  boards: Board[];
  filteredBoards: Observable<Board[]>;

  boardControl = new FormControl();
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

  filter(title: string): Board[] {
    return this.boards.filter(board => new RegExp(`^${title}`, 'gi').test(board.title));
  }

  displayFn(board: Board): string {
    return board ? board.title : '';
  }

  moveList(){
    this.boardsService.moveList(this.data.list, this.boardControl.value);
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getBoards();
    this.filteredBoards = this.boardControl.valueChanges
      .startWith(null)
      .map(board => board && typeof board === 'object' ? board.title : board)
      .map(title => title ? this.filter(title) : this.boards.slice());
  }
}
