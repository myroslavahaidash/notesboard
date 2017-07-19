import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  formHidden: boolean = true;
  title = '';
  @Output() dataCreated = new EventEmitter();

  constructor() { }

  showForm() {
    this.formHidden = false;
  }

  hideForm() {
    this.formHidden = true;
  }

  create() {
    this.dataCreated.emit(this.title);
    this.title = "";
    this.formHidden = true;
  }

  ngOnInit() {
  }

}
