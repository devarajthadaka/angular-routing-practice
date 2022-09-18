import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http:HttpClient) { }

  getComments(){
    return this.http.get(this.url);
  }
  getCommentDetails(commentName){
    return this.http.get(`${this.url}/${commentName}`);
  }
}
