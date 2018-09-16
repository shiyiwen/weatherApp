export interface Coord {
    lon: number;
    lat: number;
}

export interface MainWeather {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Cloud {
    all: number;
}

export interface System {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface CurrentWeather {
    id: number;
    name: string;
    cod: number;
    coord: Coord;
    weather: Array<Weather>;
    base: string;
    main: MainWeather;
    visibility: number;
    wind: Wind;
    clouds: Cloud;
    dt: number;
    sys: System;
}
