import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../notes-page/notes-page.component';
import { NoteDataService } from '../service/data/note-data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit{

  note!: Note

  id!: number;


  constructor(private router: Router, private noteService: NoteDataService, private route: ActivatedRoute){}




  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.note = new Note(this.id, '', '', new Date())
    if(this.id == this.id){
      this.noteService.getNoteById('amarnath.sah', this.id)
    .subscribe(
      data => this.note = data
    )
    }
  }

  cancle(){

    this.router.navigate(['notes']);

  }

  updateNote(){
    this.noteService.putNote('amarnath.sah', this.id,  this.note)
    .subscribe(
      data => {
        console.log(data);
      }
    )

    this.router.navigate(['notes']);

  }

}
