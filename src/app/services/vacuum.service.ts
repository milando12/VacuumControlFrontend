import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FilterRequest, VacuumRequest} from "../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VacuumService {
  private baseUrl = 'http://localhost:8080/vac';


  constructor(private httpClient: HttpClient) { }

  searchVacuums(name?: string,statuses?: string[],dateFrom?: string,dateTo?: string): Observable<VacuumRequest[]> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const filterRequest: FilterRequest = { name, statuses, dateFrom, dateTo };

    return this.httpClient.post<VacuumRequest[]>(`${this.baseUrl}/filter`, filterRequest, { headers });
  }

  removeVacuum(vacuumId: number): Observable<Object> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get(`${this.baseUrl}/remove/${vacuumId}`, { headers });
  }

  addVacuum(name: string): Observable<Object> {
    const token = localStorage.getItem('umToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { name };

    return this.httpClient.post(`${this.baseUrl}`+'/create', body, { headers });
  }

}
