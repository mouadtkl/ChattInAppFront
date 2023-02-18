import BuildConfig from 'react-native-config';

export const build = (url, params) => {
  let s = url;
  params
    ? params.forEach((prm) => {
        s = s.replace(`{${prm.key}}`, prm.value);
      })
    : null;
  return s;
};

const BASE_URL = BuildConfig.API_BASE_URL;

//const API_URL = `${BASE_URL}mock-service/api`;
const API_URL = `${BASE_URL}/api`;

// Controllers
const CHAT_GPT__CONTROLLER = `${API_URL}/ask-a-question`;

// Methods

export const ASK_GPT = {
  url: `${CHAT_GPT__CONTROLLER}`,
  method: 'POST',
};
