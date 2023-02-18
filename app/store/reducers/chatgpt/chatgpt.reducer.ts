/* eslint-disable no-param-reassign */
import produce from 'immer';
import { GET_ANSWER_GPT_SUCCESS } from './chatgpt.types';

const initialState = {
  answer: null,
};

const chatgptReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_ANSWER_GPT_SUCCESS:
      draft.answer = action.payload.answer;
      break;

    default:
      break;
  }
}, initialState);

export default chatgptReducer;
