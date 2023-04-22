import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  constructor(private notesss:NoteService) { }
  searchText: any;
    note: Note[] = [];
    notess:any;
    flag=false;
    open(){
      if(this.flag){
        this.flag=false;
      }else{
        this.flag=true;
      }
    }
    search(noteName: string) {
      this.notesss.getNote().subscribe({
        next: data => {
          if (noteName || noteName !== '') {
            this.notess = data.filter(note => note.title?.includes(noteName));
          }
          else
            this.notess = data;
        },
        error: e => {
          alert("Network Error  !! Please Try Again Later");
        }
      })
    }
  
  
   
  
    ngOnInit(): void {
      console.log("im on init");
      this.notesss.getNote().subscribe({next:data=>{
        console.log(data);
        this.note = data
      },
      error:e=>{
        alert("Network error");
        console.log(e);
      }
        
      });
      
      
    }
    searchTextChanged(notesName: string) {
      this.notesss.getNote().subscribe({
        next: (data: any[]) => {
          if (notesName || notesName !== '') {
            this.note = data.filter((notess: { title: string | string[]; }) => notess.title?.includes(notesName));
          }
          else
            this.note = data;
        }
      })
    }
  
 }


