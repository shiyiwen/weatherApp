import { Forecast } from './../datamodels/forecast.datamodel';
import { FetchFiveDaysForecastSuccessAction } from './../utils/actions';
import { UriBuilder } from '../utils/uribuilder';
import { Injectable } from '@angular/core';
import { AppState } from '../store/app.store';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FiveDaysForecastService {
    constructor(private store: Store<AppState>,
                private http: HttpClient,
                private uriBuilder: UriBuilder) {
    }

    get(cityId: string) {
        this.load(cityId);
        return this.store.select(store => store.fiveDaysForecast);
    }

    load(cityId: string) {
        const url = this.uriBuilder.getFiveDaysForecast(cityId);
        this.http.get(url).pipe(
            map((forecast: Forecast) =>
            new FetchFiveDaysForecastSuccessAction({id: cityId, forecast: forecast}))
        ).subscribe(action =>
            this.store.dispatch(action));
    }
}
