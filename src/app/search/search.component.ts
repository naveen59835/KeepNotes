import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText:string = "";


  
  @Output()
  searchs:EventEmitter<string> = new EventEmitter<string>();

  search(){
    this.searchs.emit(this.searchText)
   }
}
