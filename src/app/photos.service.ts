import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  getPhotosDetails(photoId){
    return this.http.get('https://jsonplaceholder.typicode.com/photos' + photoId);
  }
}
