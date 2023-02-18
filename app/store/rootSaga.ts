import { all, takeLatest } from 'redux-saga/effects';
import { apiCall } from '@app/api/apiCall';
import { INIT_PROSPECT } from '@app/store/reducers/prospect/prospect.types';
import { GET_COUNTRIES_TYPE } from '@app/store/reducers/resources/resources.types';

export default function* rootSaga() {
  yield all([takeLatest(INIT_PROSPECT, apiCall)]);
  yield all([takeLatest(GET_COUNTRIES_TYPE, apiCall)]);
}
