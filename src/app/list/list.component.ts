import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { List } from '../shared/models/list';
import { BoardsService } from "../boards.service";
import { MoveListDialogComponent } from "../move-list-dialog/move-list-dialog.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private boardsService: BoardsService,
    public dialog: MdDialog
  ) { }

  @Input() list: List;
  @Output() listDeleted = new EventEmitter<List>();

  deleteList() {
    this.listDeleted.emit(this.list);
  }

  copyList() {
    this.boardsService.copyList(this.list);
  }

  editTitle(title) {
    this.list.title = title;
  }

  createNote(title) {
    this.boardsService.createNote(this.list, title);
  }

  openMoveListDialog(){
    let dialogRef = this.dialog.open(MoveListDialogComponent, {data:  {list: this.list}});
  }

  ngOnInit() {
  }
}
