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

const { Aboutus, Camera, Check } = theme.images;

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

export default function AboutUs({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <HeaderContainer>
        <Image
          resizeMode="contain"
          source={Aboutus}
          style={{ width: s(200), height: vs(130) }}
        />
        <ScreenDesc>
          {'About Us'}
        </ScreenDesc>
      </HeaderContainer>
      <BodyContainer>
        <Description>{"Welcome to Chatty Open GPT, the chatbot powered by ChatGPT!\nOur app is designed to revolutionize the way you communicate and interact with technology. Our chatbot is powered by the latest in natural language processing and artificial intelligence technology, ensuring that you always have a reliable and efficient communication partner at your fingertips.\nOur chatbot is not only incredibly intelligent, but also incredibly friendly and engaging. Whether you're looking for help with a problem, searching for information, or just want to chat, our chatbot is always available to listen and help.One of the key benefits of our chatbot is its ability to learn and adapt to your unique needs and preferences. As you continue to use the app, our chatbot will get to know you better and become even more efficient and effective in helping you achieve your goals.\nWe understand that communication is an essential part of everyday life, and our app is designed to make it easier, more efficient, and more enjoyable. Whether you're looking to make new friends, connect with family, or just want someone to talk to, our chatbot is always there to lend a listening ear.\n          At our core, we are dedicated to providing the best possible experience for our users. We are committed to continuously improving our app and staying on the cutting edge of chatbot technology, so you can always count on us to provide you with the best possible service.\nThank you for choosing our mobile app, the chatbot powered by ChatGPT. We look forward to helping you communicate, connect, and succeed."}</Description>
      </BodyContainer>
      <FooterContainer>
        <Button
          onPress={() => navigation.goBack()}
          title="Go Back"
          type="primary"
        />
      </FooterContainer>
    </Container>
  );
}
