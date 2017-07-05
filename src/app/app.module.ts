import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { NoteComponent } from './note/note.component';
import { BoardsComponent } from './boards/boards.component';
import { AppRouterRoutingModule } from './app-router/app-router-routing.module';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {BoardsService} from "./boards.service";
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    NoteComponent,
    BoardsComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterRoutingModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [ BoardsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
