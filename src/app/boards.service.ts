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
  currentBoardId: number = 3;
  currentListId: number = 6;
  currentNoteId: number = 18;

  constructor() { }

  getCurrentBoardId(){
    return ++this.currentBoardId;
  }

  getCurrentListId(){
    return ++this.currentListId;
  }

  getCurrentNoteId(){
    return ++this.currentNoteId;
  }

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

  createBoard(title: string): void {
    this.boards.push(new Board(this.getCurrentBoardId(), title, []));
  }

  deleteBoard(board: Board) {
    this.boards.splice(this.boards.indexOf(board), 1);
  }

  copyBoard(board: Board){
    this.boards.push(Object.assign({}, board,
      {
        id: this.getCurrentBoardId(),
        lists: board.lists.map(list => Object.assign({}, list,
          {
            id: this.getCurrentListId(),
            boardId: board.id,
            notes: list.notes.map(note => Object.assign({}, note,
              {
                id: this.getCurrentNoteId(),
                listId: list.id
              }))
          }))
      }));
  }

  createList(board: Board, title: string){
    board.lists.push(new List(this.getCurrentListId(), title, [], board.lists.length +1, board.id));
  }

  copyList(list: List){

    this.getBoard(list.boardId).subscribe(board =>
    board.lists.push(Object.assign({}, list,
      {
        id: this.getCurrentListId(),
        notes: list.notes.map(note =>  Object.assign({}, note,
          {
            id: this.getCurrentNoteId(),
            listId: list.id
          }))
      })))
  }

  deleteList(board: Board, list: List){
    board.lists.splice(board.lists.indexOf(list), 1);
  }

  createNote(list: List, title: String){
    this.getBoard(list.boardId)
      .subscribe(board => list.notes
        .push(new Note(this.getCurrentNoteId(), title, '', list.notes.length + 1, list.id)));
  }

  deleteNote(boardId: Number, note: Note){
    this.getBoard(boardId).subscribe(board => {
      const list = board.lists.find(list => list.id === note.listId);
      list.notes.splice(list.notes.indexOf(note), 1);
    });
  }

  moveList(list: List, board: Board){
    this.getBoard(list.boardId)
      .subscribe(board => this.deleteList(board, list));
    list.boardId = board.id;
    board.lists.push(list);
  }

  moveNote(note: Note, currentBoardId: number, list: List){
    this.deleteNote(currentBoardId, note);
    note.listId = list.id;
    list.notes.push(note);
  }

  copyNote(note: Note, boardId: number){
    this.getBoard(boardId).subscribe(board => {
      board.lists.find(list => list.id === note.listId)
        .notes.push(Object.assign({}, note, {id: this.getCurrentNoteId()}));
    });
  }
}
