import { UriBuilder } from '../utils/uribuilder';
import { Injectable } from '@angular/core';
import { AppState } from '../store/app.store';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { FetchCurrentWeatherSuccessAction } from '../utils/actions';
import { map } from 'rxjs/operators';
import { CurrentWeather } from '../datamodels/weather.datamodel';

@Injectable()
export class CurrentWeatherService {
    constructor(private store: Store<AppState>,
                private http: HttpClient,
                private uriBuilder: UriBuilder) {
    }

    get(cityId: string) {
        this.load(cityId);
        return this.store.select(store => store.currentWeather);
    }

    load(cityId: string) {
        const url = this.uriBuilder.getCurrentWeather(cityId);
        this.http.get(url).pipe(
            map((weather: CurrentWeather) =>
            new FetchCurrentWeatherSuccessAction({id: cityId, currentWeather: weather}))
        ).subscribe(action =>
            this.store.dispatch(action));
    }
}
