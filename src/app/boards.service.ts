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

  getNote(boardId: Number, noteId: Number): Observable<Note>{
    let board: Observable<Board> = this.getBoard(boardId);

    let note: Observable<Note> = board.map(
      board => board.lists.map(list => list.notes)
        .reduce((resultArray, currentInnerArray) => {
          return resultArray.concat(currentInnerArray);
        } , [])
        .find(note => note.id === noteId)
    );

    return note;
  }

  createBoard(title: String): void{
    this.boards.push(new Board(this.boards.length + 1, title, []));
  }

  createList(board: Board, title: String){
    board.lists.push(new List(board.lists.length + 1, title, [], board.lists.length +1, board.id));
  }

  deleteList(board: Board, list: List){
    board.lists.splice(board.lists.indexOf(list), 1);
  }

  createNote(list: List, title: String){
    this.getBoard(list.boardId)
      .subscribe(board => list.notes
        .push(new Note(board.currentNoteId++, title, '', list.notes.length + 1, list.id)));
  }


  // засунути сплайс в сабскрайб
  deleteNote(boardId: Number, note: Note){
    this.getBoard(boardId).subscribe(board => {
      let list = board.lists.find(list => list.id === note.listId);
      list.notes.splice(list.notes.indexOf(note), 1);
    });
  }
}
