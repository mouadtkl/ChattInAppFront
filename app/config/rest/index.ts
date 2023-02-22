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

const CHAT_BASE_URL = BuildConfig.CHAT_BASE_URL;
//const CONFIG_BASE_URL = BuildConfig.CONFIG_BASE_URL;
const CONFIG_BASE_URL = 'https://mouadtkl.github.io';

//const API_URL = `${BASE_URL}mock-service/api`;
const CHAT_API_URL = `${CHAT_BASE_URL}/api`;
const CONFIG_API_URL = `${CONFIG_BASE_URL}/chattyConfig`;
// Controllers
const CHAT_GPT__CONTROLLER = `${CHAT_API_URL}/ask-a-question`;
const LOAD_CONFIG__CONTROLLER = `${CONFIG_API_URL}/app-config.json`;

// Methods

export const ASK_GPT = {
  url: `${CHAT_GPT__CONTROLLER}`,
  method: 'POST',
};

export const LOAD_CNFG = {
  url: `${LOAD_CONFIG__CONTROLLER}`,
  method: 'GET',
};
