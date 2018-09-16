import { FiveDaysForecastService } from './services/fiveDaysForecast.service';
import { CurrentWeatherCardComponent } from './components/currentWeatherCard/currentWeatherCard.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CurrentWeatherService } from './services/currentWeather.service';
import { appReducer } from './store/app.store';
import { CardComponent } from './components/card/card.component';
import { CitySearchComponent } from './components/citySearch/citySearch.component';
import { CityService } from './components/citySearch/services/city.service';
import { MaterialModel } from './material.module';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { CardGridComponent } from './components/cardGrid/cardGrid.component';
import { UriBuilder } from './utils/uribuilder';

@NgModule({
  declarations: [
    AppComponent,
    CardGridComponent,
    CardComponent,
    CitySearchComponent,
    CurrentWeatherCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    MaterialModel,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UriBuilder,
    CurrentWeatherService,
    CityService,
    FiveDaysForecastService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
