import { typeCreator } from '@app/utils/redux';
import { apiActionTypes } from '@app/api/apiUtils';

const { requestTag, successTag, errorTag } = apiActionTypes;

export const GET_ANSWER_GPT = 'GET_ANSWER_GPT';
export const GET_ANSWER_GPT_REQUEST = typeCreator(GET_ANSWER_GPT, requestTag);
export const GET_ANSWER_GPT_SUCCESS = typeCreator(GET_ANSWER_GPT, successTag);
export const GET_ANSWER_GPT_ERROR = typeCreator(GET_ANSWER_GPT, errorTag);

export const SET_EMPTY_ANSWER = 'SET_EMPTY_ANSWER';

export const LOAD_CONFIG = 'LOAD_CONFIG';
export const LOAD_CONFIG_REQUEST = typeCreator(LOAD_CONFIG, requestTag);
export const LOAD_CONFIG_SUCCESS = typeCreator(LOAD_CONFIG, successTag);
export const LOAD_CONFIG_ERROR = typeCreator(LOAD_CONFIG, errorTag);
