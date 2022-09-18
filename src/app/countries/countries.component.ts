import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

countries:any=[];

  constructor(private api:CountriesService) { }

  ngOnInit(): void {
    this.api.getCountries().subscribe(res=>{
      console.log(res);
      this.countries=res;
      console.log(this.countries);
    })
  }

}
