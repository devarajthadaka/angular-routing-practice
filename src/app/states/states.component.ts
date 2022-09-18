import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  states:any=[];
  countryId: string | number;

  constructor(private api:StatesService, private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(params=>{
      this.countryId=params.get('id') || null
    })
    this.getStates();
  }
 getStates(){
  this.api.getStates(this.countryId).subscribe(res=>{
    console.log(res);
    this.states=res;
    console.log(this.states);
  },error=>{
    console.log(error);
  })
 }
}
