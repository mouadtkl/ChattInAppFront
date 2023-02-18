import {
  PUT_PROSPECT,
  POST_NATIONALITY,
  POST_DOCUMENTS,
  GET_FORMS,
  POST_FORM,
  build,
} from '@app/config/rest';
import { dispatchCall } from '@app/api/apiCall';
import {
  INIT_PROSPECT,
  NATIONALITY_SELECTION,
  SEND_DOCUMENTS,
  GET_SCANNED_DATA,
  SUBMIT_FORM,
} from './prospect.types';

export const becomeProspect = (deviceId) => ({
  type: INIT_PROSPECT,
  request: {
    METHOD: PUT_PROSPECT.method,
    URL: PUT_PROSPECT.url,
    PAYLOAD: { deviceId },
  },
});

export const nationalitySelection = (uuid, nationality, countryOfResidence) =>
  dispatchCall({
    type: NATIONALITY_SELECTION,
    request: {
      METHOD: POST_NATIONALITY.method,
      URL: build(POST_NATIONALITY.url, [{ key: 'uuid', value: uuid }]),
      PAYLOAD: { nationality, countryOfResidence },
    },
  });

export const sendProspectDocuments = (uuid, documents) =>
  dispatchCall({
    type: SEND_DOCUMENTS,
    request: {
      METHOD: POST_DOCUMENTS.method,
      URL: build(POST_DOCUMENTS.url, [{ key: 'uuid', value: uuid }]),
      PAYLOAD: { documents },
    },
  });

export const getScannedData = (uuid) =>
  dispatchCall({
    type: GET_SCANNED_DATA,
    request: {
      METHOD: GET_FORMS.method,
      URL: build(GET_FORMS.url, [{ key: 'uuid', value: uuid }]),
      PAYLOAD: {},
    },
  });

export const submitForm = (uuid, form) =>
  dispatchCall({
    type: SUBMIT_FORM,
    request: {
      METHOD: POST_FORM.method,
      URL: build(POST_FORM.url, [{ key: 'uuid', value: uuid }]),
      PAYLOAD: { attributes: { ...form } },
    },
  });
