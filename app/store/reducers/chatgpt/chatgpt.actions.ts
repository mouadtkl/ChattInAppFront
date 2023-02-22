import { LOAD_CNFG, ASK_GPT, build } from '@app/config/rest';
import { dispatchCall, apiCall } from '@app/api/apiCall';
import { GET_ANSWER_GPT, SET_EMPTY_ANSWER, LOAD_CONFIG } from './chatgpt.types';

export const getAnswerGpt = (question) => ({
  type: GET_ANSWER_GPT,
  request: {
    METHOD: ASK_GPT.method,
    URL: ASK_GPT.url,
    //URL: build(ASK_GPT.url, null),
    PAYLOAD: { question: question },
  },
});

export const setEmptyAnswer = () => ({
  type: SET_EMPTY_ANSWER,
});

export const getConfig = () => ({
  type: LOAD_CONFIG,
  request: {
    METHOD: LOAD_CNFG.method,
    URL: LOAD_CNFG.url,
  },
});

export default {
  getAnswerGpt,
  setEmptyAnswer,
  getConfig,
};
