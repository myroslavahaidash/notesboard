import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { NoteComponent } from './note/note.component';
import { BoardsComponent } from './boards/boards.component';
import { AppRouterRoutingModule } from "./app-router/app-router-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    NoteComponent,
    BoardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
