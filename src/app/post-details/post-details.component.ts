import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  details:any;
  postId: string | number;

  constructor(private api:PostsService, private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(params=>{
      this.postId = params.get('id') || null
    })
    this.api.getDetails(this.postId).subscribe(res=>{
      console.log(res);
      this.details=res;
      console.log(this.details);
    })
  }

}
