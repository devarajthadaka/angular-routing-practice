import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photoDetails:any=[];
  photoId: string | number;

  constructor(private api:PhotosService , private acticateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.acticateroute.paramMap.subscribe(params=>{
      this.photoId = params.get('id') || null
    })
    this.getPhotoDetailsById();
  }


  private getPhotoDetailsById() {
    this.api.getPhotosDetails(this.photoId).subscribe(res => {
      console.log(res);
      this.photoDetails = res;
      console.log(this.photoDetails);
    },error=> {
      console.log(error);
    });
  }
}
