/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  INIT_PROSPECT_SUCCESS,
  NATIONALITY_SELECTION_SUCCESS,
  SEND_DOCUMENTS_SUCCESS,
  GET_SCANNED_DATA_SUCCESS,
  SUBMIT_FORM_SUCCESS,
} from './prospect.types';

const initialState = {
  deviceId: null,
  uuid: null,
  countryOfResidence: null,
  nationality: null,
  gender: null,
  firstName: null,
  lastName: null,
  phone: null,
  address: null,
  email: null,
  birthday: null,
  additionalAttributes: null,
  neededDocuments: null,
  uploadedDocuments: null,
  scannedData: null,
};

const prospectReducer = produce((draft, action) => {
  switch (action.type) {
    case INIT_PROSPECT_SUCCESS:
      draft.deviceId = action.payload.deviceId;
      draft.uuid = action.payload.uuid;
      draft.countryOfResidence = action.payload.countryOfResidence;
      draft.nationality = action.payload.nationality;
      draft.gender = action.payload.gender;
      draft.firstName = action.payload.firstName;
      draft.lastName = action.payload.lastName;
      draft.phone = action.payload.phone;
      draft.address = action.payload.address;
      draft.email = action.payload.email;
      draft.birthday = action.payload.birthday;
      draft.additionalAttributes = action.payload.additionalAttributes;
      draft.uploadedDocuments = action.payload.documents;
      draft.products = action.payload.products;
      draft.creationDate = action.payload.creationDate;
      draft.clientStatus = action.payload.clientStatus;
      draft.statusDate = action.payload.statusDate;
      break;

    case NATIONALITY_SELECTION_SUCCESS:
      draft.neededDocuments = action.payload;
      break;

    case SEND_DOCUMENTS_SUCCESS:
      draft.uploadedDocuments = action.payload.documents;
      break;

    case GET_SCANNED_DATA_SUCCESS:
      draft.scannedData = action.payload;
      break;

    case SUBMIT_FORM_SUCCESS:
      draft.deviceId = action.payload.deviceId;
      draft.uuid = action.payload.uuid;
      draft.countryOfResidence = action.payload.countryOfResidence;
      draft.nationality = action.payload.nationality;
      draft.gender = action.payload.gender;
      draft.firstName = action.payload.firstName;
      draft.lastName = action.payload.lastName;
      draft.phone = action.payload.phone;
      draft.address = action.payload.address;
      draft.email = action.payload.email;
      draft.birthday = action.payload.birthday;
      draft.uploadedDocuments = action.payload.documents;
      break;

    default:
      break;
  }
}, initialState);

export default prospectReducer;
