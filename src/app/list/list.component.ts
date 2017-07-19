import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List } from '../shared/models/list';
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private boardsService: BoardsService
  ) { }

  @Input() list: List;
  @Output() listDeleted = new EventEmitter<List>();

  deleteList() {
    this.listDeleted.emit(this.list);
  }

  editTitle(title) {
    this.list.title = title;
  }

  createNote(title) {
    this.boardsService.createNote(this.list, title);
  }

  ngOnInit() {
  }
}
