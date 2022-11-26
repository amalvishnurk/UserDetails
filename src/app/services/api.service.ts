import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  search=new BehaviorSubject('')

  constructor(private api:HttpClient) { }

  getUserDetails(){
   return this.api.get('https://dummyjson.com/users')
  }

  viewDetails(userId:any){
    return this.api.get('https://dummyjson.com/users/'+userId)
  }
}

