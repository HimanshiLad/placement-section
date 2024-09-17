import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getTopicList(company: number): Observable<any>  {
    return this.http.get(`${this.apiUrl}/company/${company}`);
  }
  getCompanyList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/companies`);
  }
 
//   getCompanyList()  {
//    return[
//     { id: 1, name: 'company A' },
//     { id: 2, name: 'company B' },
//     { id: 3, name: 'company C' },
//     { id: 4, name: 'company D' }
//    ]
//  }

  getQuestionList() {
    // Replace this with a call to the backend API
    return [
      { id: 1, name: 'Question A......' },
      { id: 2, name: 'Question B......' },
      { id: 3, name: 'Question C......' },
      { id: 4, name: 'Question D......' }
    ]; 
  }
}


