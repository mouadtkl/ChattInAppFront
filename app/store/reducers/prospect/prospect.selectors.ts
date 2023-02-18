export const prospectIdSelector = (state) => state.prospect.uuid;
export const countryOfResidenceSelector = (state) =>
  state.prospect.countryOfResidence;
export const nationalitySelector = (state) => state.prospect.nationality;
export const neededDocumentsSelector = (state) =>
  state.prospect.neededDocuments;
export const uploadedDocumentsSelector = (state) =>
  state.prospect.uploadedDocuments;
export const scannedDataSelector = (state) => ({
  NATIONALITY:
    state.prospect.nationality ||
    state.prospect.scannedData?.attributes.nationality ||
    '',
  GENDER:
    state.prospect.gender ||
    state.prospect.scannedData?.attributes.gender ||
    '',
  FIRSTNAME:
    state.prospect.firstName ||
    state.prospect.scannedData?.attributes.firstName ||
    '',
  LASTNAME:
    state.prospect.lastName ||
    state.prospect.scannedData?.attributes.lastName ||
    '',
  PHONE:
    state.prospect.phone || state.prospect.scannedData?.attributes.phone || '',
  ADDRESS:
    state.prospect.address ||
    state.prospect.scannedData?.attributes.address ||
    '',
  EMAIL:
    state.prospect.email || state.prospect.scannedData?.attributes.email || '',
  BIRTHDAY:
    state.prospect.birthday ||
    state.prospect.scannedData?.attributes.birthday ||
    new Date(),
  DOCID: state.prospect?.additionalAttributes.DOCID || '',
});
