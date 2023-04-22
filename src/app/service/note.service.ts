import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient:HttpClient) { }
  emailId:string = '';
  name:string = '';
  lastName:string = '';
  password:string = '';
  isSignedUp:boolean = false;
  isLoggedIn:boolean = false;

  URL:string = "http://localhost:3000/notes";


  getNote():Observable<Array<Note>>{
    return this.httpClient.get<Array<Note>>(this.URL);
  }

  getNote1(id?: number) : Observable<Note> {
    return this.httpClient.get<Note>(`${this.URL}/${id}`);
  }

  postNote(note:any){
    console.log(note)
    console.log("poste method")
    return this.httpClient.post(this.URL,note)
  }

  editPost(id?: number, note?: any) {
    return this.httpClient.put<Note>(`${this.URL}/${id}`,note);
  }

  deletePost(id?: number){
    console.log("test deletepost")
    return this.httpClient.delete("http://localhost:3000/notes/"+id)
  }


}
