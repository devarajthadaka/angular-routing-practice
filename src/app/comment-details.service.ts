import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsService {

  constructor(private http:HttpClient) { }

  getCommentDetails(commentName){
    return this.http.get('https://jsonplaceholder.typicode.com/comments' + commentName);
  }
}
