import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsDetailsService } from '../albums-details.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss']
})
export class AlbumsDetailsComponent implements OnInit {

albumsDetails:any=[];
albumId:string | number;

constructor(private api:AlbumsDetailsService, private activaeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activaeroute.paramMap.subscribe(params=>{
      this.albumId = params.get('id') || null
    })
    this.api.getAlbumsDetails(this.albumId).subscribe(res=>{
      console.log(res);
      this.albumsDetails=res;
      console.log(this.albumsDetails)
    })
  }

}
