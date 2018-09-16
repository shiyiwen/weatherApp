import { CurrentWeatherService } from '../../services/currentWeather.service';
import { Component, OnInit } from '@angular/core';
import { City } from './datamodels/city.datamodel';
import { CityService } from './services/city.service';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-search-component',
  templateUrl: 'citySearch.component.html'
})

export class CitySearchComponent implements OnInit {
  public cities: Array<City>;
  public filteredCities: Array<City>;
  public query: String = '';
  public cityControl = new FormControl();
  public selectedCites: Array<string> = [];

  constructor(private cityService: CityService,
              private currentWeatherService: CurrentWeatherService) {
  }

  ngOnInit() {
    this.cityService.get().subscribe(cities => {
        this.cities = cities;
    });
    this.cityService.citiesOnDashboard.subscribe((selectedCites: string) => {
      this.selectedCites = selectedCites.split(',');
    });
  }

  selectCity(city: City) {
    if (!this.isOnDeshboard(city.id)) {
      this.query = city.name + ', ' + city.country;
      this.cityService.selectedCities = city.id.toString();
    }
  }

  queryChange(event) {
    if (event) {
      this.filteredCities = this.cities.filter(option => option.name.toLowerCase() === event.toLowerCase()
      || (event.length >= 3 && option.name.toLowerCase().includes(event.toLowerCase())));
    }
  }

  isOnDeshboard(cityId: number) {
    return this.selectedCites.indexOf(cityId.toString()) > -1;
  }
}
