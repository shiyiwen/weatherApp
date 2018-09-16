import { Injectable } from '@angular/core';
import { AppState } from '../../../store/app.store';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { FetchCitySuccessAction } from '../../../utils/actions';
import { map } from 'rxjs/operators';
import { City } from '../datamodels/city.datamodel';
import { Subject } from 'rxjs';

@Injectable()
export class CityService {

    citiesOnDashboard = new Subject();

    constructor(private store: Store<AppState>,
                private http: HttpClient) {
    }

    get() {
        this.load();
        return this.store.select(store => store.city);
    }

    set selectedCities(cityId: string) {
       // this will make sure to tell every subscriber about the change.
      if (!localStorage.getItem('cities') || localStorage.getItem('cities').length === 0) {
        localStorage.setItem('cities', cityId);
      } else {
        localStorage.setItem('cities', localStorage.getItem('cities') + ',' + cityId);
      }
      this.citiesOnDashboard.next(localStorage.getItem('cities'));
    }

    get selectedCities() {
      return localStorage.getItem('cities');
    }

    removeSelectedCities(cityId: string) {
      if (!localStorage.getItem('cities') || localStorage.getItem('cities').length === 0) {
        return;
      } else {
        const cities = localStorage.getItem('cities').split(',');
        cities.splice(cities.indexOf(cityId), 1);
        localStorage.setItem('cities', cities.join(','));
      }
      this.citiesOnDashboard.next(localStorage.getItem('cities'));
    }

    private load() {
        const filePath = '../../assets/json/city.list.min.json';
        this.http.get(filePath).pipe(
            map((payload: Array<City>) =>
            new FetchCitySuccessAction(payload))
        ).subscribe(action =>
            this.store.dispatch(action));
    }
}
