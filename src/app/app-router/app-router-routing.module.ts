import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsComponent } from '../boards/boards.component';
import { BoardComponent } from '../board/board.component';
import { NoteComponent } from '../note/note.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'board/:id',
    component: BoardComponent,
    children: [
      {path: 'note/:noteId', component: NoteComponent}
    ]
  },
  {
    path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterRoutingModule { }
