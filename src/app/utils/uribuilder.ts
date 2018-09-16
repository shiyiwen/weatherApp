import { UriConstants, ID } from './uriconstants';

export class UriBuilder {
  getCurrentWeather(cityId: string) {
    return this.buildWithId(UriConstants.CURRENT_WEATHER, cityId);
  }

  getFiveDaysForecast(cityId: string) {
    return this.buildWithId(UriConstants.FIVE_DAY_FORECAST, cityId);
  }

  private buildWithId(uri: string, id: string) {
    return uri.replace(ID, id);
  }
}
