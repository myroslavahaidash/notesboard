import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

import { Note } from "../shared/models/note";
import { BoardsService } from "../boards.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note;
  private boardId: number;

  constructor(
    private route: ActivatedRoute,
    private boardsService: BoardsService
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.boardId = +params["id"];
    });

    this.route.params
      .switchMap((params: Params) => this.boardsService.getNote(this.boardId, +params['noteId']))
      .subscribe((note: Note) => this.note = note);

    //console.log(this.boardId);
    //console.log(this.route.snapshot.paramMap.get('noteId'));
    //console.log(this.note.title);
  }
}
