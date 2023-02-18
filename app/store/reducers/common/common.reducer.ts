/* eslint-disable no-param-reassign */
import produce from 'immer';
import { apiActionTypes } from '@app/api/apiUtils';
import { HIDE_ERROR_MSG } from './common.types';

const initialState = {
  msgVisible: false,
  message: '',
  messageCode: null,
  apiCallsInProgress: 0,
};

const commonReducer = produce((draft, action) => {
  const { requestTag, errorTag, successTag } = apiActionTypes;

  if (action.type.endsWith(errorTag)) {
    draft.msgVisible = true;
    draft.message = action.payload.description;
    draft.messageCode = action.payload.code;
  } else if (
    action.type.endsWith(successTag) ||
    action.type.endsWith(requestTag) ||
    action.type === HIDE_ERROR_MSG
  ) {
    draft.msgVisible = initialState.msgVisible;
    draft.message = initialState.message;
    draft.messageCode = initialState.messageCode;
  }

  if (action.type.endsWith(requestTag)) {
    draft.apiCallsInProgress += 1;
  } else if (
    action.type.endsWith(successTag) ||
    action.type.endsWith(errorTag)
  ) {
    draft.apiCallsInProgress -= 1;
  }
}, initialState);

export default commonReducer;
