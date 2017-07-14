import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
      this.dialog.open(DialogComponent,  {
        data:  {note: this.note, boardId: this.boardId},
        width: '400px'
      });
    dialogRef.afterClosed().subscribe(() => this.router.navigate(['./board', this.boardId]));
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.boardId = +params["id"];
    });

    this.route.params
      .switchMap((params: Params) => this.boardsService.getNote(this.boardId, +params['noteId']))
      .subscribe((note: Note) => this.note = note);

    //Helps to avoid the ExpressionChangedAfterItHasBeenCheckedError in MdDialog
    setTimeout(() => this.openDialog(), 0);
  }
}
