import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Note } from './note/note.component';
import { List } from './list/list.component';
import { Sidebar } from './sidebar/sidebar.component';

import { ListService } from './list/list.service';
import { NoteService } from './note/note.service';

@NgModule({
  declarations: [
    AppComponent,
    Note,
    List,
    Sidebar
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListService,
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
