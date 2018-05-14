import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class ListService {

	private listUrl: string = '/api/lists/';

	constructor(private http: Http) { }

	getLists(userId) {
		return this.http.get(this.listUrl + userId);
	}

	createList(data) {
		return this.http.post(this.listUrl + 'create', { data: data });
	}

	updateList(listId, data) {
		return this.http.put(this.listUrl + listId, { data: data });
	}

	deleteList(listId) {
		return this.http.delete(this.listUrl + listId)
	}
}