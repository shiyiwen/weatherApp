import { Coord } from '../../../datamodels/weather.datamodel';

export interface City {
    id: number;
    name: string;
    country: string;
    coord: Coord;
}
