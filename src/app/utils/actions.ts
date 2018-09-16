import { Forecast } from './../datamodels/forecast.datamodel';
import { Action } from '@ngrx/store';
import { CurrentWeather } from '../datamodels/weather.datamodel';
import { City } from '../components/citySearch/datamodels/city.datamodel';

export let Actions = {
    FETCH_CURRENT_WEATHER_SUCCESS: 'FETCH_CURRENT_WEATHER_SUCCESS',
    FETCH_CITY_SUCCESS: 'FETCH_CITY_SUCCESS',
    FETCH_FIVE_DAYS_FORECAST_SUCCESS: 'FETCH_FIVE_DAYS_FORECAST_SUCCESS'
};

export class FetchCurrentWeatherSuccessAction implements Action {
    type: string = Actions.FETCH_CURRENT_WEATHER_SUCCESS;
    constructor(public payload: {id: string, currentWeather: CurrentWeather}) {}
}

export class FetchCitySuccessAction implements Action {
    type: string = Actions.FETCH_CITY_SUCCESS;
    constructor(public payload: Array<City>) {}
}

export class FetchFiveDaysForecastSuccessAction implements Action {
    type: string = Actions.FETCH_FIVE_DAYS_FORECAST_SUCCESS;
    constructor(public payload: {id: string, forecast: Forecast}) {}
}
