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
  newBoardTitle: String = "";

  constructor( private boardsService: BoardsService ) { }

  getBoards(): void {
    this.boardsService.getBoards().subscribe(boards => this.boards = boards);
  }

  createBoard(): void{
    this.boardsService.createBoard(this.newBoardTitle);
    this.newBoardTitle = '';
  }

  ngOnInit() {
    this.getBoards();
  }

}
