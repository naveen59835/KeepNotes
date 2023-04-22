import { NoteService } from './../service/note.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName: string='';
  lastName: string='';
  email: string='';
  password: string='';
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

   });




    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }



constructor (private _snackBar: MatSnackBar,private myService:NoteService,private router:Router){}
  register() {
    console.log(this.form.value);
    if (this.firstName=='' && this.lastName && this.email==''&& this.password=='') {
      // this.myService.emailId=this.email;
      // this.myService.password=this.password;
      // this.myService.lastName=this.password;
      // this.myService.name=this.firstName;
      alert('one or more fields are required');


    }else{
      this.myService.isLoggedIn=true;
      alert('successfully signed up');

      this.router.navigate(['/login']);

    }

    this._snackBar.open('Feedback submitted successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })



  }

}
