/* eslint-disable no-console */
import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@app/components/Button';
import theme from '@app/config/theme';
import { s, vs } from '@app/utils/styles';
import { Image } from 'react-native';
import ImagePicker, { Options } from 'react-native-image-crop-picker';
import {
  Container,
  HeaderContainer,
  BodyContainer,
  FooterContainer,
  ScreenDesc,
  Description
} from './components';
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const { Contactus, Camera, Check } = theme.images;

const options: Options = {
  width: 1200,
  height: 800,
  cropping: true,
  includeBase64: true,
  writeTempFile: false,
  mediaType: 'photo',
};

declare type ImageState = {
  image: String | null | undefined;
  isValid: boolean;
  loading: boolean;
};

export default function ContactUs({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <HeaderContainer>
        <Image
          resizeMode="contain"
          source={Contactus}
          style={{ width: s(250), height: vs(180) }}
        />
        <ScreenDesc>
          {'Contactez-Nous'}
        </ScreenDesc>
      </HeaderContainer>
      <BodyContainer>
        <Description>{'If you have any questions, comments, concerns, or business inquiry, please don\'t hesitate to contact us using the email address: contact@handy2b.com'}</Description>
      </BodyContainer>
      <FooterContainer>
        <Button
          onPress={() => navigation.goBack()}
          title="Go Back"
          type="primary"
        />
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
      </FooterContainer>
    </Container>
  );
}
