import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: any
  userDetails:any
  constructor(private activatedroute: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data: any) => {
      console.log(data.id);
      this.userId = data.id
    })

this.apiservice.viewDetails(this.userId)
.subscribe((result:any)=>{
  console.log(result);
  this.userDetails=result
})
  }

}
