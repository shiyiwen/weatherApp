import { FiveDaysForecastService } from './../../services/fiveDaysForecast.service';
import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../datamodels/weather.datamodel';
import { CityService } from '../citySearch/services/city.service';
import { CurrentWeatherService } from '../../services/currentWeather.service';

@Component({
  selector: 'app-current-weather-card-component',
  templateUrl: 'currentWeatherCard.component.html',
  styleUrls: ['currentWeatherCard.component.css']
})

export class CurrentWeatherCardComponent implements OnInit {
  @Input() cityId: string;
  currentWeather: CurrentWeather;
  fiveDaysForecast: Array<CurrentWeather>;

  constructor(private currentWeatherService: CurrentWeatherService,
              private cityService: CityService,
              private fiveDaysForecastService: FiveDaysForecastService) {
  }

  ngOnInit() {
    this.currentWeatherService.get(this.cityId).subscribe(currentWeather =>
      this.currentWeather = currentWeather.get(this.cityId));
    this.fiveDaysForecastService.get(this.cityId).subscribe(forcast => {
      if (forcast.get(this.cityId)) {
        this.fiveDaysForecast = forcast.get(this.cityId).list;
      }
    });
  }

  removeCity(cityId: number) {
    this.cityService.removeSelectedCities(cityId.toString());
  }
}
