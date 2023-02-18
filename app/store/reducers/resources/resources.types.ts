import { typeCreator } from '@app/utils/redux';
import { apiActionTypes } from '@app/api/apiUtils';

const { requestTag, successTag, errorTag } = apiActionTypes;

export const GET_COUNTRIES_TYPE = 'GET_COUNTRIES';
export const GET_COUNTRIES_REQUEST = typeCreator(
  GET_COUNTRIES_TYPE,
  requestTag,
);
export const GET_COUNTRIES_SUCCESS = typeCreator(
  GET_COUNTRIES_TYPE,
  successTag,
);
export const GET_COUNTRIES_ERROR = typeCreator(GET_COUNTRIES_TYPE, errorTag);
