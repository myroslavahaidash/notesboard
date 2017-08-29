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
  filteredBoards: Observable<Board[]>;
  boardControl = new FormControl();
  listControl = new FormControl();
  lists: List[];
  filteredLists: Observable<List[]>;

  constructor(
    private boardsService: BoardsService,
    public dialogRef: MdDialogRef<MoveNoteDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data
  ) {}

  getBoards(): void {
      this.boardsService.getBoards().subscribe(boards =>this.boards = boards);
  }

  filterBoards(title: string): Board[] {
    return this.boards.filter(board => new RegExp(`^${title}`, 'gi').test(board.title));
  }

  filterLists(title: string): List[] {
    return this.lists.filter(list => new RegExp(`^${title}`, 'gi').test(list.title));
  }

  displayBoardFn(board: Board): string {
    return board ? board.title : '';
  }

  displayListFn(list: List): string{
    return list ? list.title : ''
  }

  moveNote(){
    this.boardsService.moveNote(this.data.note, this.data.boardId, this.listControl.value);
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getBoards();

    this.filteredBoards = this.boardControl.valueChanges
      .startWith(null)
      .map(board => board && typeof board === 'object' ? board.title : board)
      .map(title => title ? this.filterBoards(title) : this.boards.slice());

    this.boardControl.valueChanges.subscribe(board => {
      this.lists = board.lists.filter(list => list.id !== this.data.note.listId);
      this.filteredLists = this.listControl.valueChanges
        .startWith(null)
        .map(list => list && typeof list === 'object' ? list.title : list)
        .map(title => title ? this.filterLists(title) : this.lists.slice());
    });
  }
}
