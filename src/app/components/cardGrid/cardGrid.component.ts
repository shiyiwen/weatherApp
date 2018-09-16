import { CityService } from '../citySearch/services/city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grid-component',
  templateUrl: 'cardGrid.component.html',
  styleUrls: ['cardGrid.component.css']
})


export class CardGridComponent implements OnInit {
  cityIds: Array<string> = [];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.cityIds = this.getCitiesArray(localStorage.getItem('cities'));
    this.cityService.citiesOnDashboard.subscribe((cityIds: string) =>
      this.cityIds = this.getCitiesArray(cityIds));
  }

  getCitiesArray(cityIds: string) {
    if (cityIds.length > 0) {
      return cityIds.split(',');
    } else {
      return [];
    }
  }
}
