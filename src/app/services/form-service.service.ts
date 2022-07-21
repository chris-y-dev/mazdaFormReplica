import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormData } from 'src/models/FormData';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  }) 
 }

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private url = "http://localhost:5000/mazda3";

  constructor(private http : HttpClient) { }

  getFormData(): Observable<FormData>{
    return this.http.get<FormData>(this.url);
  }

}
