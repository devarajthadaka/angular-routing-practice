import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.scss']
})
export class CommentsDetailsComponent implements OnInit {

  commentDetails:any=[];
  commentName:string | number;

  constructor(private api:CommentsService , private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(params=>{
      this.commentName = params.get('name') || null
    })
    this.api.getCommentDetails(this.commentName).subscribe(res=>{
      console.log(res);
      this.commentDetails=res;
      console.log(this.commentDetails);
    })
  }

}
