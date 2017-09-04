import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { BoardsService } from '../boards.service';

import {Todo} from "../shared/models/todo";
import {Checklist} from "../shared/models/checklist";

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  @Output() checklistDeleted = new EventEmitter<Checklist>();
  @Input() checklist;
  progress: number = 0;
  checked: number = 0;

  constructor(
    private boardsService: BoardsService
  ) { }

  changeCheckedCount(event, todo){
    event.checked ? this.checked++ : this.checked--;
    todo.completed = event.checked;
    this.countProgress();
  }

  countProgress(){
    if(this.checklist.items.length > 0){
      this.progress = Math.round((this.checked/this.checklist.items.length)*100);
    }
    else{
      this.progress = 0;
    }
  }

  blockClicksOnItems(event){
    event.stopPropagation();
  }

  editTodo(title, todo) {
    todo.title = title;
  }

  editTitle(title){
    this.checklist.title = title;
  }

  deleteItem(todo){
    if(todo.completed){
      this.checked--;
    }
    this.boardsService.deleteTodo(this.checklist, todo);
    this.countProgress();
  }

  addItem(title): void {
    this.boardsService.createTodo(this.checklist, title);
    this.countProgress();
  }

  deleteChecklist(){
    this.checklistDeleted.emit(this.checklist);
  }

  ngOnInit() {

  }

}
