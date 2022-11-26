import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any = []
  searchTerm=''

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getUserDetails()
      .subscribe((result: any) => {

        console.log(result.users);
        this.userList = result.users
        console.log(this.userList);
      })

      this.apiservice.search.subscribe(data=>{
        console.log(data);
        this.searchTerm=data
        
      })



  }

}
