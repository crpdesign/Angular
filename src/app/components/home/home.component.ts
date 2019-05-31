import { Component, OnInit } from '@angular/core';
import {MiddlewareService} from '../../middleware.service';

 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
strategyHighlights:any ;
  constructor(private MiddlewareService:MiddlewareService) { }

  ngOnInit() {
  this.MiddlewareService.getStrategyHighlights().subscribe((data)=>{
    this.strategyHighlights = data ;
    console.log(this.strategyHighlights);
  })
  }

}
