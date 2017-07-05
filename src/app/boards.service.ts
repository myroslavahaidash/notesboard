import { Injectable } from '@angular/core';

import { Board } from './shared/models/board';
import { List } from './shared/models/list';
import { Note } from './shared/models/note';

import { boards } from './shared/data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardsService {
  boards: Board[] = boards;

  constructor() { }

  getBoards(): Observable<Board[]> {
    return Observable.of(this.boards);
  }

  getBoard(id: Number): Observable<Board>{
    return this.getBoards().map(boards => boards.find(board => board.id === id));
  }

  createBoard(title: String): void{
    this.boards.push(new Board(this.boards.length + 1, title, []));
  }

  createList(board: Board, title: String){
    board.lists.push(new List(board.lists.length + 1, title, [], board.lists.length +1));
  }

  deleteList(board: Board, list: List){
    board.lists.splice(board.lists.indexOf(list), 1);
  }

  createNote(list: List, title: String){
    list.notes.push(new Note(list.notes.length + 1, title, '', list.notes.length + 1))
  }
}
