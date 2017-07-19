import { Component, OnInit } from '@angular/core';

import { Board } from "../shared/models/board";
import { BoardsService } from '../boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {

  boards: Board[] = [];

  constructor( private boardsService: BoardsService ) { }

  getBoards(): void {
    this.boardsService.getBoards().subscribe(boards => this.boards = boards);
  }

  createBoard(title): void {
    this.boardsService.createBoard(title);
  }

  ngOnInit() {
    this.getBoards();
  }

}
