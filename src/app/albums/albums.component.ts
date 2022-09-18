import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

albums:any=[];

  constructor(private api:AlbumsService) { }

  ngOnInit(): void {
    this.api.getAlbums().subscribe(res=>{
      console.log(res);
      this.albums=res;
      console.log(this.albums);
    })
  }

}
