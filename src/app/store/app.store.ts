import { Forecast } from './../datamodels/forecast.datamodel';
import { fiveDaysForecastReducer } from './../reducers/fiveDaysForecast.reducer';
import { CurrentWeather } from '../datamodels/weather.datamodel';
import { currentWeatherReducer } from '../reducers/currentWeather.reducer';
import { City } from '../components/citySearch/datamodels/city.datamodel';
import { cityReducer } from '../components/citySearch/reducers/city.reducer';

export interface AppState {
    currentWeather: Map<string, CurrentWeather>;
    city: Array<City>;
    fiveDaysForecast: Map<string, Forecast>;
}

export const appReducer = {
    currentWeather: currentWeatherReducer,
    city: cityReducer,
    fiveDaysForecast: fiveDaysForecastReducer,
};
