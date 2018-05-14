import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class NoteService {

	private noteUrl: string = '/api/notes/';

	constructor(private http: Http) { }

	getNotes(userId) {
		return this.http.get(this.noteUrl + userId);
	}

	createNote(data) {
		return this.http.post(this.noteUrl + 'create', { data: data });
	}

	updateNote(noteId, data) {
		return this.http.put(this.noteUrl + noteId, { data: data });
	}

	deleteNote(noteId) {
		return this.http.delete(this.noteUrl + noteId)
	}
}