import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  search(event:any){
    console.log(event.target.value);
    let searchKey=event.target.value
    this.apiService.search.next(searchKey)
    
  }

}
