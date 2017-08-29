import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private boardsService: BoardsService,
    private router: Router
  ) {}

  board: Board;

  deleteBoard() {
    this.boardsService.deleteBoard(this.board);
    this.router.navigate(['./boards']);
  }

  copyBoard(){
    this.boardsService.copyBoard(this.board);
  }

  createList(title): void{
    this.boardsService.createList(this.board, title);
  }

  deleteList(list): void{
    this.boardsService.deleteList(this.board, list);
  }

  editTitle(title){
    this.board.title = title;
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.boardsService.getBoard(+params['id']))
      .subscribe((board: Board) => this.board = board);
  }
}

