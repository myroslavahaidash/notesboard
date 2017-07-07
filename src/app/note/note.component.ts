import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

import { Note } from "../shared/models/note";
import { BoardsService } from "../boards.service";
import { MdDialog, MdDialogRef } from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { DialogComponent } from "../dialog/dialog.component";

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
    private boardsService: BoardsService,
    public dialog: MdDialog,
    private router: Router
  ) {}

  openDialog(){
    const dialogRef: MdDialogRef<DialogComponent> =
      this.dialog.open(DialogComponent, { data: this.note });
    dialogRef.afterClosed().subscribe(() => this.router.navigate(['./board', this.boardId]));

  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.boardId = +params["id"];
    });

    this.route.params
      .switchMap((params: Params) => this.boardsService.getNote(this.boardId, +params['noteId']))
      .subscribe((note: Note) => this.note = note);

    setTimeout(() => this.openDialog(), 0);
  }
}
