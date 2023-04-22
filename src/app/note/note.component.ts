import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input()
  contact?: Note={};
}



