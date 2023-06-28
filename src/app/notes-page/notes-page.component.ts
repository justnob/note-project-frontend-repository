import { Component, OnInit } from '@angular/core';
import { NoteDataService } from '../service/data/note-data.service';
import { Router } from '@angular/router';

export class Note{

  constructor(public id:number, public tital:string, public description:string, public date: Date){

  }

}

export class Note2{

  constructor(public id:number, public username: string, public tital:string, public description:string, public date: Date){

  }

}

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit{
  
  notes: Note[] = []
  message: any

  valu: any

  constructor(private noteService: NoteDataService, private route: Router){}

  ngOnInit(): void {
    
    this.refreshNotes()

  }

  refreshNotes(){
    this.noteService.retriveAllTodoForUser('amarnath.sah').subscribe(
      response => {
        console.log(response)
        this.notes = response;
      }
    ) 
  }

  deleteNote(id: any){
    this.noteService.deleteNoteById('amarnath.sah', id).subscribe(
      response => {
        console.log('Item has been deleted with ' + id);
        this.message = `The note has been deleated! id: ${id}`;
        this.refreshNotes()
      }
    )
  }

  updateNote(id: any){

    console.log(`Update works ${id}`);
    this.route.navigate(['note', id])

    this.valu = false

  }

  createNote(){
    this.route.navigate(['notec'])

    this.valu = true
  }

  // notes = [

  //   new Note(1, 'Angular', 'Route to get the current logged in user detail.', new Date()),
  //   new Note(2, 'Spring Boot', 'Add H2 in pom.xlm to access h2 database.', new Date()),
  //   new Note(3, 'Spring Boot', 'You can use spring.io website to quickly create the spring project.', new Date()),
  //   new Note(4, 'Market', 'need to buy vegitables for today.', new Date()),
  //   new Note(5, 'Home', 'need to clean the cloths .', new Date()),
  //   new Note(6, 'Java', 'Println prints witha a new line.', new Date()),
  //   new Note(7, 'Spring Boot', 'It is most popular framework for java.', new Date()),
    

  // ]

}
