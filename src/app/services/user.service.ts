import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User, UserNoPassword} from "../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';


  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<UserNoPassword[]> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<UserNoPassword[]>(`${this.apiUrl}/read/all`, { headers });
  }

  deleteUser(email: string): Observable<void> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${email}`, { headers });
  }

  getUserByEmail(email: string): Observable<UserNoPassword> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<UserNoPassword>(`${this.apiUrl}/read/${email}`, { headers });
  }

  updateUser(user: UserNoPassword): Observable<void> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.put<void>(`${this.apiUrl}/update`, user, { headers });
  }

  createUser(user: User): Observable<void> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post<void>(`${this.apiUrl}/create`, user, { headers });
  }
}
