import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

import { List } from '../shared/models/list';
import { BoardsService } from "../boards.service";
import { MoveListDialogComponent } from "../move-list-dialog/move-list-dialog.component";
import { DragulaService } from "ng2-dragula/index";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private boardsService: BoardsService,
    private dragulaService: DragulaService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) {
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
  }

  private onDropModel(args) {
    const el = args[0];

    const noteId = +el.dataset.itemId;

    const note = this.list.notes.filter(n => n.id == noteId)[0];

    if (note) {
      note.listId = this.list.id;

      this.boardsService.save();
    }
  }

  @Input() list: List;
  @Output() listDeleted = new EventEmitter<List>();

  deleteList() {
    this.listDeleted.emit(this.list);
  }

  copyList() {
    this.boardsService.copyList(this.list);
    this.snackBar.open('Copy of this list was created', '', {
      duration: 2000,
    });

  }

  editTitle(title) {
    this.list.title = title;
    this.boardsService.save();
  }

  createNote(title) {
    this.boardsService.createNote(this.list, title);
    this.snackBar.open('Note was created', '', {
      duration: 2000,
    });
  }

  openMoveListDialog(){
    let dialogRef = this.dialog.open(MoveListDialogComponent, {data:  {list: this.list}});
  }

  ngOnInit() {
  }
}
