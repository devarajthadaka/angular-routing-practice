import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http:HttpClient) { }

  getCities(){
    return this.http.get('https://letstalk-be.herokuapp.com/public/cities/Telangana');
  }
}
