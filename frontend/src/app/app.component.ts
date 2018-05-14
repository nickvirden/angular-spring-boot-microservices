import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { List } from './list/list.component';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lists: Array<List> = [];
  listIndex: number = 0;

  addList() {
  	this.lists.push(new List());
    // Associate (POST) a new note with this list
    // this.listService.createList({ 'listName': 'The newest list' });
  }

  updateList() {
    // Update (PUT) an existing note with a new title
    // this.listService.updateList({ 'listId': 5, listName': 'The new-and-improved list' });
  }

  removeList($event, index) {
  	this.lists.splice(index, 1);
    // DELETE the note from this list
    // this.listService.deleteList({ 'listId': 5 });
  }
}
