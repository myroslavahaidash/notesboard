import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent implements OnInit {
  hideForm: Boolean = true;
  @Output() textEdited = new EventEmitter();
  @Input() text: String;

  constructor() { }

  showForm() {
    this.hideForm = false;
  }

  editText() {
    this.textEdited.emit(this.text);
    this.hideForm = true;
  }

  ngOnInit() {
  }

}
