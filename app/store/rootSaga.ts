import { all, takeLatest } from 'redux-saga/effects';
import { apiCall } from '@app/api/apiCall';
import { GET_ANSWER_GPT, LOAD_CONFIG} from '@app/store/reducers/chatgpt/chatgpt.types';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_ANSWER_GPT, apiCall),
    takeLatest(LOAD_CONFIG, apiCall),
  ]);
}
