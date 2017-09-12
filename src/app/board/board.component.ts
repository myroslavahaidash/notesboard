import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

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
    private router: Router,
    public snackBar: MdSnackBar
  ) {}

  board: Board;

  deleteBoard() {
    this.boardsService.deleteBoard(this.board);
    this.router.navigate(['./boards']);
    this.snackBar.open('Board was deleted', '', {
      duration: 2000,
    });
  }

  copyBoard(){
    this.boardsService.copyBoard(this.board);
    this.snackBar.open('Copy of this board was created', '', {
      duration: 2000,
    });
  }

  createList(title): void{
    this.boardsService.createList(this.board, title);
  }

  deleteList(list): void{
    this.boardsService.deleteList(this.board, list);
    this.snackBar.open('List was deleted', '', {
      duration: 2000,
    });
  }

  editTitle(title){
    this.board.title = title;
    this.boardsService.save();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.boardsService.getBoard(+params['id']))
      .subscribe((board: Board) => this.board = board);
  }
}

