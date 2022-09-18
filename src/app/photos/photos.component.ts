import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

photos:any=[];

  constructor(private api:PhotosService) { }

  ngOnInit(): void {
   this.getPhotos();
  }
  getPhotos(){
    this.api.getPhotos().subscribe(res=>{
      console.log(res);
      this.photos=res;
      console.log(this.photos);
    },error=>{
      console.log(error);
    })
  }

}
