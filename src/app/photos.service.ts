import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get(this.url);
  }
  getPhotosDetails(photoId){
    return this.http.get(`${this.url}/${photoId}`);
  }
}
