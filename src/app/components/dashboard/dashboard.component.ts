import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  loading = false
  launchYears = [];
  launchFilter = [];
  landingFilter = [];
  satelliteList = [];
  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.launchYears = Array(2020 - 2006 + 1).fill((i) => i).map((_, idx) => ({ val: 2006 + idx }))
    this.launchFilter = ['True', 'False'].map((item) => ({ val: item }));
    this.landingFilter = JSON.parse(JSON.stringify(this.launchFilter));
    this.getSatellites();
  }



  getSatellites() {
    this.loading = true;
    this.satelliteList = [];
    let filter = {
      year: this.launchYears.filter((i) => i.isSelected).length ? this.launchYears.filter((i) => i.isSelected)[0]['val'] : null,
      launch: this.launchFilter.filter((i) => i.isSelected).length ? this.launchFilter.filter((i) => i.isSelected)[0]['val'] : null,
      landed: this.landingFilter.filter((i) => i.isSelected).length ? this.landingFilter.filter((i) => i.isSelected)[0]['val'] : null
    };
    this.dataService.getSatellites(filter).subscribe((data: any) => {
      this.loading = false;
      this.satelliteList = data;

      if(!data.length) {
        alert("No Data Found for applied filters!");
      }
    })
  }

  selectFilter(item) {
    item.isSelected = !item.isSelected;
    this.launchYears.filter((i) => i.val != item.val).map((i) => i.isSelected = false);
    this.getSatellites();
  }

  selectLaunchFilter(item) {
    item.isSelected = !item.isSelected;
    this.launchFilter.filter((i) => i.val != item.val).map((i) => i.isSelected = false);
    this.getSatellites();
  }

  selectLandingFilter(item) {
    item.isSelected = !item.isSelected;
    this.landingFilter.filter((i) => i.val != item.val).map((i) => i.isSelected = false);
    this.getSatellites();
  }
}
