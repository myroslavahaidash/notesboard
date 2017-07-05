import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Board } from '../shared/models/board';
import { BoardsService } from '../boards.service';


@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private boardsService: BoardsService
  ){}

  board: Board;
  newListTitle: String = "";

  createList(): void{
    this.boardsService.createList(this.board, this.newListTitle);
    this.newListTitle = '';
  }

  deleteList(list): void{
    this.boardsService.deleteList(this.board, list);
  }


  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.boardsService.getBoard(+params['id']))
      .subscribe((board: Board) => this.board = board);

  }
}

