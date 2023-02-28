import React, { useEffect } from 'react';
import Button from '@app/components/Button';
import BuildConfig from 'react-native-config';
import Background from '@app/components/Background';
import theme from '@app/config/theme';
import { s, vs } from '@app/utils/styles';
import useTranslation from '@app/i18n/useTranslation';
import i18n from '@app/i18n';
import { getValue } from '@app/services/storage/asyncStorage';
import {
  Container,
  HeadContainer,
  HeadMessage,
  BodyMessage,
  BodyContainer,
  FooterContainer,
} from './components';
import { useSelector } from 'react-redux';
import { appConfig } from '@app/store/reducers/chatgpt/chatgpt.selectors';
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn';
import Reactotron from 'reactotron-react-native'

//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const { ArrowRight } = theme.images;

export default function Configure({ navigation }) {
  const { translate } = useTranslation('Language');

  // useEffect(() => {
  //   async function observeVpn() {
  //     addVpnStateListener((e) => {
  //       console.log(JSON.stringify(e));
  //     });
  //   }
  //   observeVpn();
  //   return async () => {
  //     removeVpnStateListener();
  //   };
  // });


  // useEffect(() => {
  //   !RNSimpleOpenvpn.VpnState.VPN_STATE_CONNECTED ? loadLang() : startOvpn();
  // }, [RNSimpleOpenvpn.VpnState]);



  function random() {

    var textArray = [
      'Korea',
      'Usa',
      'Australia',
      'Canada',
      'Japan',
      'Brazil'
    ];
    var randomNumber = Math.floor(Math.random() * textArray.length);

    return textArray[randomNumber];

  }


  async function startOvpn() {
    try {
      await RNSimpleOpenvpn.connect({
        remoteAddress: '',
        ovpnFileName: random(),
        assetsPath: '',
        notificationTitle: 'Chatty Open AI Server',
        compatMode: RNSimpleOpenvpn.CompatMode.OVPN_TWO_THREE_PEER,
        providerBundleIdentifier: 'com.your.network.extension.bundle.id',
        localizedDescription: 'TestRNSimpleOvpn',
      });

      setTimeout(() => loadLang(), 1000);

    } catch (error) {
      console.log(error);
    }
  }

  async function loadLang() {
    const selectedLang = await getValue('selectedLang');
    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
      navigation.navigate('Guide');
    } else {
      navigation.navigate('Lang');
    }
  }

  //Reactotron.log('sqfsgsg', BuildConfig, configData.config[0]);
  const adUnitId = BuildConfig.ENV !== 'PRODUCTION' ? TestIds.BANNER : 'ca-app-pub-2120609105203416/9862661500';

  return (
    <Background>
      <Container>
        <HeadContainer>
          <HeadMessage>{'Welcome ! Connect to Our Chatty Open AI Server'}</HeadMessage>
        </HeadContainer>
        <BodyContainer>
          <BodyMessage>{"For a faster experience, kindly Switch to our fast connection point :)"}</BodyMessage>
        </BodyContainer>
        <FooterContainer>
          <Button
            onPress={() => startOvpn()}
            title={"Connect"}
            type="primary"
            icon={ArrowRight}
            iconPosition="right"
          />
        </FooterContainer>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={(error) => {
            console.error('Advert failed to load: ', error);
          }}
        />
      </Container>
    </Background>
  );
}
