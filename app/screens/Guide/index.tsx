import React, { useCallback, useState, useEffect } from 'react';
import theme from '@app/config/theme';
import Button from '@app/components/Button';
import { ViewStyle, StyleProp } from 'react-native';
import Swiper from 'react-native-swiper';
import { s, vs } from '@app/utils/styles';
import { SvgProps } from 'react-native-svg';
import {
  Container,
  Background,
  ContentContainer,
  ActionsContainer,
  BodyContainer,
  HeadContainer,
  Title,
  Description,
  SkipContainer,
  SkipText,
} from './components';

const dotStyle: StyleProp<ViewStyle> = {
  backgroundColor: 'transparent',
  borderColor: theme.colors.SECONDARY_LIGHT,
  borderStyle: 'solid',
  borderWidth: 1,
  width: 10,
  height: 10,
  borderRadius: 10,
};

const activeDotStyle: StyleProp<ViewStyle> = {
  backgroundColor: theme.colors.SECONDARY_LIGHT,
  width: 10,
  height: 10,
  borderRadius: 10,
};

type Step = {
  id: string;
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
  action?: { title?: string; func?: Function } | undefined;
};

export default function Guide({ navigation }) {
  const {
    BgMasquePng,
    Notification,
    Localisation,
    Scan,
    Form,
    Signature,
    ArrowRight,
    Shuttle,
  } = theme.images;

  const [steps, setSteps] = useState<Array<Step>>([]);

  const skip = useCallback((nav) => {
    nav.navigate('Home');
  }, []);

  useEffect(() => {
    const allSteps = [
      {
        id: 'step-1',
        icon: Notification,
        title: 'Welcome',
        description:
          "Lie Detector Machine for Prank simulates to test whether you are telling the truth or lying, it's easy, secure and in just a few clicks!",
      },
      {
        id: 'step-2',
        icon: Localisation,
        title: 'Finger into scanner  panel',
        description: 'Keep your finger into the scanner panel while x Ray scan your fingerprint.',
      },
      {
        id: 'step-3',
        icon: Scan,
        title: 'Scanning your Finger',
        description: 'XRay will start scanning your finger. after some seconds, the machine will determinate you tell the truthor you lie.',
      },
      // {
      //   id: 'step-4',
      //   icon: Form,
      //   title: 'Lets Start',
      //   description: 'Abusus enim multitudine hominum quam tranquillis',
      // },
      {
        id: 'step-4',
        icon: Signature,
        title: 'Enjoy the machine',
        description: 'Have enjoy and fun with Lie Detector prank and share it with your friends or family or social media.',
        action: {
          title: "Lets Start",
          func: skip,
        },
      },
    ];
    setSteps(allSteps);
  }, [Form, Localisation, Notification, Scan, Signature, skip]);

  return (
    <Container>
      <SkipContainer onPress={() => skip(navigation)}>
        <SkipText>Skip</SkipText>
        <ArrowRight width={s(15)} height={vs(15)} />
      </SkipContainer>
      <Background source={BgMasquePng}>
        <Swiper
          loop={false}
          dotStyle={dotStyle}
          activeDotStyle={activeDotStyle}
        >
          {steps.map(({ id, icon: Icon, title, description, action }) => (
            <Container key={id}>
              <ContentContainer>
                <HeadContainer>
                  <Icon width={s(300)} height={vs(230)} />
                </HeadContainer>
                <BodyContainer>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </BodyContainer>
              </ContentContainer>
              <ActionsContainer>
                {action && (
                  <Button
                    onPress={() => action.func && action.func(navigation)}
                    title={action?.title || ''}
                    type="primary"
                    icon={Shuttle}
                    iconPosition="right"
                    iconType="normal"
                  />
                )}
              </ActionsContainer>
            </Container>
          ))}
        </Swiper>
      </Background>
    </Container>
  );
}
