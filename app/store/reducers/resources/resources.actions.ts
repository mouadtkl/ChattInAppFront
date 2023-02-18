import { GET_COUNTRIES } from '@app/config/rest';
import { GET_COUNTRIES_TYPE } from './resources.types';

export const getCountries = () => ({
  type: GET_COUNTRIES_TYPE,
  request: {
    METHOD: GET_COUNTRIES.method,
    URL: GET_COUNTRIES.url,
  },
});

export default {
  getCountries,
};
