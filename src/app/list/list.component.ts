import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List } from '../shared/models/list';
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: List;
  @Output() listDeleted = new EventEmitter<List>();
  newNoteTitle: String = "";

  deleteList(){
    this.listDeleted.emit(this.list);
  }

  createNote(){
    this.boardsService.createNote(this.list, this.newNoteTitle);
    this.newNoteTitle = "";
  }

  constructor(private boardsService: BoardsService) { }

  ngOnInit() {
  }

}
