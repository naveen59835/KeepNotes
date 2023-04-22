import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  panelOpenState = false;
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  
  note :Note = {};
  minDate:Date = new Date
  @Output()
  noteAdded: EventEmitter<Note> = new EventEmitter<Note>();
  constructor(private notes: NoteService,private _snackBar: MatSnackBar) { 
    this.minDate.setDate(this.minDate.getDate()+1)
  }

  add(noteForm:any) {
    
    let Note:Note ={
      title: noteForm.title,
      content: noteForm.content,
      date: noteForm.date,
      category: noteForm.addcategory,
      priority: noteForm.priority

    }
    console.log(noteForm.content)
    console.log(noteForm)
    console.log(noteForm.value)
    this.notes.postNote(noteForm).subscribe( card => {
      alert("New card Added");
      this.note = {}
    })

  }
  onSubmit(noteForm: any){
    this._snackBar.open('Note Added successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })
      console.log("submitted successfully")
      this.add(this.note)
   }




}
