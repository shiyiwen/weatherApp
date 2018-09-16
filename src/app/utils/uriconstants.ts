export const BASE = 'http://api.openweathermap.org/data/2.5/';
export const APPID = '&appid=0af96df1e7bde5a6b9a55c3c6ca724bb';
export const UNITS = '&units=imperial';
export const ID = '{{ID}}';

export let UriConstants = {
    CURRENT_WEATHER: BASE + 'weather?id=' + ID + APPID + UNITS,
    FIVE_DAY_FORECAST: BASE + 'forecast?id=' + ID + APPID + UNITS
};

