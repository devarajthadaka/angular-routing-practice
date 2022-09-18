import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsDetailsService {

  constructor(private http:HttpClient) { }

  getAlbumsDetails(albumId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums' + albumId);
  }
}
