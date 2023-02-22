import axios from 'axios';
import { put } from 'redux-saga/effects';
import { typeCreator } from '@app/utils/redux';
import i18n from '@app/i18n';
import { errorHandler } from './errorHandler';
import { apiActionTypes, apiTimeOut } from './apiUtils';

export function* apiCall(action) {
  const { requestTag, successTag, errorTag } = apiActionTypes;
  const { type, request } = action;
  try {
    // dispatch requesting action to start loading...
    yield put({ type: typeCreator(type, requestTag) });

    const response = yield axios({
      method: request.METHOD,
      //url: request.URL.concat('?lang=').concat(i18n.language),
      url: request.URL,
      timeout: request.TIMEOUT || apiTimeOut.middle,
      data: request.PAYLOAD,
      ...(request.RESPONSE_TYPE && { responseType: request.RESPONSE_TYPE }),
    });

    yield put({
      type: typeCreator(type, successTag),
      payload: response.data,
    });
  } catch (error) {
    const errorType = typeCreator(type, errorTag);
    yield put(errorHandler(errorType, error));
  }
}

export function executeCall(dispatch, type, request) {
  const { requestTag, successTag, errorTag } = apiActionTypes;
  // dispatch requesting action to start loading...
  dispatch({ type: typeCreator(type, requestTag) });
  return new Promise((resolve, reject) => {
    axios({
      method: request.METHOD,
      //url: request.URL.concat('?lang=').concat(i18n.language),
      url: request.URL,
      timeout: request.TIMEOUT || apiTimeOut.low,
      data: request.PAYLOAD,
      //...(request.RESPONSE_TYPE && { responseType: request.RESPONSE_TYPE }),
    })
      .then((response) => {
        dispatch({
          type: typeCreator(type, successTag),
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch((error) => {
        const errorType = typeCreator(type, errorTag);
        const errorAction = errorHandler(errorType, error);
        dispatch(errorAction);
        reject(errorAction.payload.errorMessage);
      });
  });
}

export function dispatchCall({ type, request }) {
  return (dispatch) => {
    executeCall(dispatch, type, request);
  };
}
