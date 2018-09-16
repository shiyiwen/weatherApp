import { FetchFiveDaysForecastSuccessAction, Actions } from './../utils/actions';
import { Forecast } from './../datamodels/forecast.datamodel';
import { ActionReducer } from '@ngrx/store';

export const fiveDaysForecastReducer: ActionReducer<Map<string, Forecast>> =
  (state: Map<string, Forecast> = new Map<string, Forecast>(), action: FetchFiveDaysForecastSuccessAction) => {
    switch (action.type) {
        case Actions.FETCH_FIVE_DAYS_FORECAST_SUCCESS:
          const nextState = new Map(state);
          nextState.set(action.payload.id, action.payload.forecast);
          return nextState;

        default:
            return state;
    }
};
