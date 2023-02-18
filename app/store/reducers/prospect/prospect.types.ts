import { typeCreator } from '@app/utils/redux';
import { apiActionTypes } from '@app/api/apiUtils';

const { requestTag, successTag, errorTag } = apiActionTypes;

export const INIT_PROSPECT = 'INIT_PROSPECT';
export const INIT_PROSPECT_REQUEST = typeCreator(INIT_PROSPECT, requestTag);
export const INIT_PROSPECT_SUCCESS = typeCreator(INIT_PROSPECT, successTag);
export const INIT_PROSPECT_ERROR = typeCreator(INIT_PROSPECT, errorTag);

export const NATIONALITY_SELECTION = 'NATIONALITY_SELECTION';
export const NATIONALITY_SELECTION_REQUEST = typeCreator(
  NATIONALITY_SELECTION,
  requestTag,
);
export const NATIONALITY_SELECTION_SUCCESS = typeCreator(
  NATIONALITY_SELECTION,
  successTag,
);
export const NATIONALITY_SELECTION_ERROR = typeCreator(
  NATIONALITY_SELECTION,
  errorTag,
);

export const SEND_DOCUMENTS = 'SEND_DOCUMENTS';
export const SEND_DOCUMENTS_REQUEST = typeCreator(SEND_DOCUMENTS, requestTag);
export const SEND_DOCUMENTS_SUCCESS = typeCreator(SEND_DOCUMENTS, successTag);
export const SEND_DOCUMENTS_ERROR = typeCreator(
  NATIONALITY_SELECTION,
  errorTag,
);

export const GET_SCANNED_DATA = 'GET_SCANNED_DATA';
export const GET_SCANNED_DATA_REQUEST = typeCreator(
  GET_SCANNED_DATA,
  requestTag,
);
export const GET_SCANNED_DATA_SUCCESS = typeCreator(
  GET_SCANNED_DATA,
  successTag,
);
export const GET_SCANNED_DATA_ERROR = typeCreator(
  NATIONALITY_SELECTION,
  errorTag,
);

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_REQUEST = typeCreator(SUBMIT_FORM, requestTag);
export const SUBMIT_FORM_SUCCESS = typeCreator(SUBMIT_FORM, successTag);
export const SUBMIT_FORM_ERROR = typeCreator(NATIONALITY_SELECTION, errorTag);
