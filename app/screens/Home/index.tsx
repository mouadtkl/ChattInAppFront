import React from 'react';
import Button from '@app/components/Button';
import BuildConfig from 'react-native-config';
import { useHeaderHeight } from '@react-navigation/stack';
import HelpAndServices from '@app/features/HelpAndServices';
import theme from '@app/config/theme';
import useTranslation from '@app/i18n/useTranslation';
import { s, vs } from '@app/utils/styles';
import {
  Container,
  HeadContainer,
  Title,
  BodyContainer,
  FooterContainer,
} from './components';
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const { ArrowDown, Bank, PersonalInfo } = theme.images;

export default function Home({ navigation }) {
  const { translate } = useTranslation('Home');
  const headerHeight = useHeaderHeight();

  const adUnitId = BuildConfig.ENV !== 'PRODUCTION' ? TestIds.BANNER : 'ca-app-pub-2120609105203416/7041057040';


  return (
    <Container topMargin={headerHeight}>
      <HeadContainer>
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
        <Title>ASK CHAT GPT WORLD</Title>
        {/* <ArrowDown width={s(20)} height={vs(20)} /> */}
      </HeadContainer>
      <BodyContainer>
        <Button
          onPress={() => navigation.navigate('Chatt')}
          title="CHAT"
          type="select"
          //icon={PersonalInfo}
          iconPosition="left"
          iconType="round"
        />
        <Button
          onPress={() => navigation.navigate('QAndA')}
          title="QUESTIONS & RESPONSES"
          type="select"
          //icon={Bank}
          iconPosition="left"
          iconType="round"
        />
      </BodyContainer>
      <FooterContainer>
        <HelpAndServices navigation={navigation} />
      </FooterContainer>
    </Container>
  );
}
