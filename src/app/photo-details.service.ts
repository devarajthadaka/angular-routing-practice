import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoDetailsService {

  constructor(private http:HttpClient) { }

  getPhotosDetails(photoId){
    return this.http.get('https://jsonplaceholder.typicode.com/photos' + photoId);
  }
}
