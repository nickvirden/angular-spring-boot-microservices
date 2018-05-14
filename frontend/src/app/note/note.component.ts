import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List } from '../list/list.component';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class Note implements OnInit {

	@Input() notes: Array<Note>;

  @Input() noteIndex: number;

  @Output() onDeleteNote = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() { }
  
  sendNoteIndexToListToRemoveCard() {
  	this.onDeleteNote.emit(this.noteIndex);
  }
}
