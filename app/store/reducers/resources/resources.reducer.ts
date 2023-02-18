/* eslint-disable no-param-reassign */
import produce from 'immer';
import { GET_COUNTRIES_SUCCESS } from './resources.types';

const initialState = {
  countries: [],
};

const resourcesReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      draft.countries = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default resourcesReducer;
