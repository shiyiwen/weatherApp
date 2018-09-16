import { CurrentWeather } from './weather.datamodel';
import { City } from '../components/citySearch/datamodels/city.datamodel';

export interface Forecast {
  cnt: number;
  cod: string;
  message: number;
  city: City;
  list: Array<CurrentWeather>;
}
