/* eslint-disable no-global-assign */
/* eslint-disable no-console */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import '@app/i18n';
import { ThemeProvider } from 'styled-components';
import theme from '@app/config/theme';
import Navigator from '@app/navigation/Navigator';
import { Provider } from 'react-redux';
import store from '@app/store';
import AppView from '@app/components/AppView';
import { platformType } from '@app/utils/device';
// import { useSelector, useDispatch } from 'react-redux';
// import { getConfig } from '@app/store/reducers/chatgpt/chatgpt.actions';
// import { appConfig } from '@app/store/reducers/chatgpt/chatgpt.selectors';

declare const global: {
  HermesInternal: null | {};
  originalXMLHttpRequest: {
    new(): XMLHttpRequest;
    prototype: XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
  };
  XMLHttpRequest: {
    new(): XMLHttpRequest;
    prototype: XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
  };
};

if (__DEV__) {
  console.ignoredYellowBox = ['Remote debugger'];
  XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
}

function App() {

  // const dispatch = useDispatch();
  // const dynamicConfig = useSelector(appConfig);

  // async function loadConfig() {
  //   dispatch(getConfig());
  // }

  useEffect(() => SplashScreen.hide()
    , []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppView>
          {platformType.isIos && <StatusBar barStyle="light-content" />}
          <Navigator />
        </AppView>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
