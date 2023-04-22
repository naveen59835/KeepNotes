import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }
  emailId:string = '';
  isLoggedIn:boolean = false;
  toHome(){
    this.router.navigate([""]);
    }
}
