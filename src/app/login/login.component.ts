import { NoteService } from './../service/note.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { user } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';
  flag:number = 0;
  users:user[]=[
    {emailId:'naveen@gmail.com', password:'123'},
    {emailId:'praveen@gmail.com', password:'1234'},
    {emailId:'sam@gmail.com', password:'12345'},
    {emailId:'bob@gmail.com', password:'123456'}
  ]
constructor (private myRouter:Router,private myService:NoteService){}

  checkLogin() {

  for (let var1=0;var1<this.users.length;var1++){
    if(this.users[var1].emailId===this.email&&this.users[var1].password==this.password){
      this.flag=1;
      break;
    }
  }
  if(this.flag===1){
    this.myService.isLoggedIn=true;
    this.myRouter.navigate(['/notes']);
  }else{
    alert('Please enter a valid email and password');
    this.email='';
    this.password='';
  }

   }
}
