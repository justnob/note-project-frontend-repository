import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/notes-page/notes-page.component';


@Injectable({
  providedIn: 'root'
})

export class NoteDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodoForUser(username: any){

    return this.http.get<Note[]>(`http://localhost:8080/users/${username}/notes`);

  }

  deleteNoteById(username: string, id: number){

    return this.http.delete(`http://localhost:8080/users/${username}/notes/${id}`);

  }

  getNoteById(username: string, id: number){

    return this.http.get<Note>(`http://localhost:8080/users/${username}/notes/${id}`);

  }

  putNote(username: string, id: number, note: any){
    return this.http.put(`http://localhost:8080/users/${username}/notes/${id}`, note);
  }

  createANote(username: string, note: any){
    return this.http.post(`http://localhost:8080/users/${username}/notes`, note);
  }

}
