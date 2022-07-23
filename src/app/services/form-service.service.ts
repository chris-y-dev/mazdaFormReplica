import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormData } from 'src/models/FormData';
import { CustomCar } from 'src/models/CustomCar';

const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  }) 
 }

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private url = "http://localhost:5000/";

  constructor(private http : HttpClient) { }

  getFormData(formData: string): Observable<FormData>{

    const newUrl = this.url + formData;

    return this.http.get<FormData>(newUrl);
  }

  submitForm(submission: CustomCar): Observable<CustomCar> {

    const buildUrl = this.url + "myBuilds"

    console.log(buildUrl)

    return this.http.post<CustomCar>(buildUrl, submission, httpOptions);
  }

}
