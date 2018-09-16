import { ActionReducer } from '@ngrx/store';
import { City } from '../datamodels/city.datamodel';
import { Actions, FetchCitySuccessAction } from '../../../utils/actions';

export const cityReducer: ActionReducer<Array<City>> = (state: Array<City> = [], action: FetchCitySuccessAction) => {
    switch (action.type) {
        case Actions.FETCH_CITY_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
