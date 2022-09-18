import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:any=[];

  constructor(private api:PostsService) { }

  ngOnInit(): void {
    this.api.getPosts().subscribe(res=>{
      console.log(res);
      this.posts=res;
      console.log(this.posts);
    })
  }

}
