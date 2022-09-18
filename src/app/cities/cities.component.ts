import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities:any=[];

  constructor(private api:CitiesService) { }

  ngOnInit(): void {
    this.api.getCities().subscribe(res=>{
      console.log(res);
      this.cities=res;
      console.log(this.cities);
    })
  }

}
