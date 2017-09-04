import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent implements OnInit {
  hideForm: Boolean = true;
  @Output() textEdited = new EventEmitter();
  @Input() text: string;
  value: string;
  @Input() allowEmpty: boolean;

  constructor() { }

  showForm() {
    this.hideForm = false;
  }

  editText() {
    if(this.allowEmpty || this.text.trim()){
      this.value = this.text.trim();
      this.textEdited.emit(this.text.trim());
    }
    this.text = this.value;
    this.hideForm = true;
  }

  ngOnInit() {
  }

}
