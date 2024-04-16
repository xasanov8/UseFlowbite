import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7023/api/PersonCRUD/GetPersons";

  constructor(private http : HttpClient) {}

  id:number = 0;

  user?:User;

  getAll(): Observable<User[]> { 
    return this.http.get<User[]>(this.baseUrl);
  }

  // getById() { 
  //   return this.http.get<User>(`${this.baseUrl}/${this.id}`);
  // }

  // create() { 
  //   return this.http.get<User>(this.baseUrl,this.user);
  // }
}
