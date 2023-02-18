import BuildConfig from 'react-native-config';

export const build = (url, params) => {
  let s = url;
  params ? params.forEach((prm) => {
    s = s.replace(`{${prm.key}}`, prm.value);
  }) : null
  return s;
};

const BASE_URL = BuildConfig.API_BASE_URL;

//const API_URL = `${BASE_URL}mock-service/api`;
const API_URL = `${BASE_URL}/api`;


// Controllers
const LANGUAGES_CONTROLLER = `${API_URL}/languages`;
const PROSPECTS_CONTROLLER = `${API_URL}/prospects`;
const COUNTRIES_CONTROLLER = `${API_URL}/countries`;
const FORMS_CONTROLLER = `${API_URL}/forms`;
const CHAT_GPT__CONTROLLER = `${API_URL}/ask-a-question`;


// Methods
export const GET_LANGUAGES = {
  url: LANGUAGES_CONTROLLER,
  method: 'GET',
};

export const GET_COUNTRIES = {
  url: COUNTRIES_CONTROLLER,
  method: 'GET',
};

export const GET_FORMS = {
  url: `${FORMS_CONTROLLER}/{uuid}`,
  method: 'GET',
};

export const POST_FORM = {
  url: `${FORMS_CONTROLLER}/{uuid}`,
  method: 'POST',
};

export const ASK_GPT = {
  url: `${CHAT_GPT__CONTROLLER}`,
  method: 'POST',
};

