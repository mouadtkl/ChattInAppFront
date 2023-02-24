import React from 'react';
import Button from '@app/components/Button';
import Background from '@app/components/Background';
import theme from '@app/config/theme';
import { s, vs } from '@app/utils/styles';
import ChangeLanguage from '@app/features/ChangeLanguage';
import useTranslation from '@app/i18n/useTranslation';
import {
  Container,
  HeadContainer,
  HeadMessage,
  BodyContainer,
  FooterContainer,
} from './components';
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const { BgAuth, LogoBlack, ArrowRight } = theme.images;

export default function Language({ navigation }) {
  const { translate } = useTranslation('Language');

  return (
    <Background /*source={BgAuth}*/>
      <Container>
        <HeadContainer>
          {/* <LogoBlack width={s(140)} height={vs(66)} /> */}
          <HeadMessage>{translate('headMsg')}</HeadMessage>
        </HeadContainer>
        <BodyContainer>
          <ChangeLanguage />
        </BodyContainer>
        <FooterContainer>
          <Button
            onPress={() => navigation.navigate('Guide')}
            title={translate('start')}
            type="primary"
            icon={ArrowRight}
            iconPosition="right"
          />
        </FooterContainer>
        <BannerAd
          unitId={TestIds.BANNER}
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
