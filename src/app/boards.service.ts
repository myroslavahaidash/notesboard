import { Injectable } from '@angular/core';

import { Board } from './shared/models/board';
import { List } from './shared/models/list';
import { Note } from './shared/models/note';
import { Checklist } from "./shared/models/checklist";
import { Todo } from "./shared/models/todo";

import { boards } from './shared/data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class BoardsService {
  boards: Board[];
  currentBoardId: number = 0;
  currentListId: number = 0;
  currentNoteId: number = 0;

  constructor() {
    this.boards = JSON.parse(localStorage.getItem("notesboard_boards")) || boards;

    const counters = JSON.parse(localStorage.getItem("notesboard_counters")) || {};

    this.currentBoardId = counters.currentBoardId || 1;
    this.currentListId = counters.currentListId || 3;
    this.currentNoteId = counters.currentNoteId || 6;
  }

  save(){
    localStorage.setItem("notesboard_boards", JSON.stringify(this.boards));
    localStorage.setItem("notesboard_counters", JSON.stringify({
      currentBoardId: this.currentBoardId,
      currentListId: this.currentListId,
      currentNoteId: this.currentNoteId
    }));
  }

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
    this.save();
  }

  deleteBoard(board: Board) {
    this.boards.splice(this.boards.indexOf(board), 1);
    this.save();
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
    this.save();
  }

  createList(board: Board, title: string){
    board.lists.push(new List(this.getCurrentListId(), title, [], board.id));
    this.save();
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
      })));
    this.save();
  }

  deleteList(board: Board, list: List){
    board.lists.splice(board.lists.indexOf(list), 1);
    this.save();
  }

  createNote(list: List, title: String){
    list.notes.push(new Note(this.getCurrentNoteId(), title, '', [], list.id));
    this.save();
  }

  deleteNote(boardId: Number, note: Note){
    this.getBoard(boardId).subscribe(board => {
      const list = board.lists.find(list => list.id === note.listId);
      list.notes.splice(list.notes.indexOf(note), 1);
      this.save();
    });
  }

  moveList(list: List, board: Board){
    this.getBoard(list.boardId)
      .subscribe(board => this.deleteList(board, list));
    list.boardId = board.id;
    board.lists.push(list);
    this.save();
  }

  moveNote(note: Note, currentBoardId: number, list: List){
    this.deleteNote(currentBoardId, note);
    note.listId = list.id;
    list.notes.push(note);
    this.save();
  }

  copyNote(note: Note, boardId: number){
    this.getBoard(boardId).subscribe(board => {
      board.lists.find(list => list.id === note.listId)
        .notes.push(Object.assign({}, note, {id: this.getCurrentNoteId()}));
      this.save();
    });
  }

  createTodo(checklist, title: string){
    checklist.items.push(new Todo(title, false));
    this.save();
  }

  deleteTodo(checklist, todo){
    checklist.items.splice(checklist.items.indexOf(todo), 1);
    this.save();
  }

  createChecklist(note: Note, title: string){
    note.checklists.push(new Checklist(title, []));
    this.save();
  }

  deleteChecklist(note: Note, checklist: Checklist){
    note.checklists.splice(note.checklists.indexOf(checklist), 1);
    this.save();
  }
}
