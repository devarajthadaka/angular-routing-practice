import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get('https://letstalk-be.herokuapp.com/public/countries');
  }
}
