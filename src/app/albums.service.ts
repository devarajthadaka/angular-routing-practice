import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/albums";

  getAlbums(){
    return this.http.get('url');
  }
  getAlbumsDetails(albumId){
    return this.http.get('url' + albumId);
  }
}
