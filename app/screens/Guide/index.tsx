import React, { useCallback, useState, useEffect } from 'react';
import theme from '@app/config/theme';
import Button from '@app/components/Button';
import { ViewStyle, StyleProp } from 'react-native';
import Swiper from 'react-native-swiper';
import { s, vs } from '@app/utils/styles';
import { SvgProps } from 'react-native-svg';
import BuildConfig from 'react-native-config';
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
//import { TestIds, InterstitialAd, AdEventType, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { TestIds, InterstitialAd, AdEventType, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';


const adUnitId = BuildConfig.ENV !== 'PRODUCTION' ? TestIds.BANNER : 'ca-app-pub-2120609105203416/1601028108';

const intAdUnitId = BuildConfig.ENV !== 'PRODUCTION' ? TestIds.INTERSTITIAL : 'ca-app-pub-2120609105203416/7783293071';


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
    Learn,
    Signature,
    ArrowRight,
    Shuttle,
  } = theme.images;

  const [steps, setSteps] = useState<Array<Step>>([]);

  const skip = useCallback((nav) => {
    nav.navigate('Home');
  }, []);

  const interstitial = InterstitialAd.createForAdRequest(intAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });


  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      interstitial.show();
    });
    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);


  useEffect(() => {
    const allSteps = [
      {
        id: 'step-1',
        icon: Notification,
        title: 'Welcome',
        description:
          "Chatty Open GPT - AI Chatbot lets you have rich conversations in different languages thanks to its Artificial Intelligence Powered Chatbot.",
      },
      {
        id: 'step-2',
        icon: Localisation,
        title: 'Multicultural',
        description: "Ask our Chatbot about countries, localizations, and cultures."
      },
      {
        id: 'step-3',
        icon: Learn,
        title: 'Learn with ChatGPT',
        description: "Generate code, learn computer science, and learn anything from ChatGPT",
      },
      {
        id: 'step-4',
        icon: Signature,
        title: 'Enjoy the Conversation',
        description: "Have fun and enjoy with Chatty Open GPT - generate jokes or look for business insights and share it it with your friends, family or on social media.",
        action: {
          title: "Let's Start",
          func: skip,
        },
      },
    ];
    setSteps(allSteps);
    //loaded ? interstitial.show() : null;
  }, [Learn, Localisation, Notification, Signature, skip]);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

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
      </Background>
    </Container>
  );
}
