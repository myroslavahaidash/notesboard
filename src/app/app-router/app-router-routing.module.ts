import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsComponent } from '../boards/boards.component';
import { BoardComponent } from '../board/board.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'board/:id',
    component: BoardComponent
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
