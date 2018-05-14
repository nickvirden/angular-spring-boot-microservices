import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { AppComponent } from '../app.component';
import { Note } from '../note/note.component';

// import { ListService } from './list.service';

@Component({
  selector: 'YelloList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class List implements OnInit {

  notes: Array<Note> = [];
  noteIndex: number = 0;

  // constructor(private listService: ListService) { }
  constructor() { }

  ngOnInit() {
    // GET all of the boards for this user
    // this.listService.getLists(5);
  }

  addCard() {
  	this.notes.push(new Note());
    // Associate (POST) a new note with this list
    // this.notesService.createNote({ 'listId': 5, 'noteName': 'random note', 'noteDescription': 'this is a sample description'})
  }

  updateCard() {
    // Update (PUT) an existing note with a new title
    // this.notesService.updateNote({ 'noteId': 5, 'newNoteName': 'on-topic note', 'noteDescription': 'this is a not-so-samply description'})
  }

  removeCard($event, index) {
  	this.notes.splice(index, 1);
    // DELETE the note from this list
    // this.notesService.deleteNote({ 'noteId': 5 })
  }

  @Input() lists: Array<List>;

  @Input() listIndex: number;

  @Output() onDeleteList = new EventEmitter<number>();
  
  sendListIndexToAppToRemoveList() {
    this.onDeleteList.emit(this.listIndex);
  }
}
