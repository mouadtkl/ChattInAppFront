import { typeCreator } from '@app/utils/redux';
import { apiActionTypes } from '@app/api/apiUtils';

const { requestTag, successTag, errorTag } = apiActionTypes;

export const GET_ANSWER_GPT = 'GET_ANSWER_GPT';
export const GET_ANSWER_GPT_REQUEST = typeCreator(GET_ANSWER_GPT, requestTag);
export const GET_ANSWER_GPT_SUCCESS = typeCreator(GET_ANSWER_GPT, successTag);
export const GET_ANSWER_GPT_ERROR = typeCreator(GET_ANSWER_GPT, errorTag);
