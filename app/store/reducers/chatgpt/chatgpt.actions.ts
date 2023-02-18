import { ASK_GPT, build } from '@app/config/rest';
import { dispatchCall, apiCall } from '@app/api/apiCall';
import { GET_ANSWER_GPT, GET_ANSWER_GPT_REQUEST } from './chatgpt.types';

export const getAnswerGpt = (question) => {
  dispatchCall({
    type: GET_ANSWER_GPT,
    request: {
      METHOD: ASK_GPT.method,
      URL: ASK_GPT.url,
      //URL: build(ASK_GPT.url, null),
      PAYLOAD: { question: question },
    },
  });
};
