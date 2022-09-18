import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http:HttpClient) { }

  getStates(countryId){
    return this.http.get('https://letstalk-be.herokuapp.com/public/states/' + countryId);
  }
}
