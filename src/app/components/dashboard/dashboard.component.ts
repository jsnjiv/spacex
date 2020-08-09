import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  launchYears = [];
  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.launchYears = Array(2020 - 2006 + 1).fill((i)=>i).map((_, idx) => ({val:2006 + idx}))
  }

  selectFilter(item) {
    item.isSelected = !item.isSelected;
  }

  // #98FB98	
  //#8FBC8F	def
}
