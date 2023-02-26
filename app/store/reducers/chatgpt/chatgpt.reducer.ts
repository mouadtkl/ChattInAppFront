/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  GET_ANSWER_GPT_SUCCESS,
  GET_ANSWER_GPT_ERROR,
  SET_EMPTY_ANSWER,
  LOAD_CONFIG_SUCCESS,
} from './chatgpt.types';

const initialState = {
  answer: null,
  dynamicConfig: [],
};

const chatgptReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_ANSWER_GPT_SUCCESS:
      draft.answer = action.payload.result;
      break;
    case GET_ANSWER_GPT_ERROR:
      draft.answer = 'Something went wrong !! ☹️';
      break;
    case SET_EMPTY_ANSWER:
      draft.answer = '';
      break;
    case LOAD_CONFIG_SUCCESS:
      draft.dynamicConfig = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default chatgptReducer;
