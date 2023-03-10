import React, { useCallback, useEffect, useState, useRef } from 'react';
import theme from '@app/config/theme';
import { useSelector, useDispatch } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/stack';
import BuildConfig from 'react-native-config';
import axios from 'axios';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  Container,
  BodyContainer,
} from './components';
//import Reactotron from 'reactotron-react-native'
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { TestIds, RewardedAd, RewardedAdEventType, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

import { getAnswerGpt, setEmptyAnswer } from '@app/store/reducers/chatgpt/chatgpt.actions';
import { answerGptSelector } from '@app/store/reducers/chatgpt/chatgpt.selectors';
import { appConfig } from '@app/store/reducers/chatgpt/chatgpt.selectors';

import styles from './styles';

export default function Chatt({ navigation }) {

  const adUnitId = BuildConfig.ENV !== 'PRODUCTION' ? TestIds.BANNER : 'ca-app-pub-2120609105203416/1788730366';
  const rewAdUnitId = BuildConfig.ENV !== 'PRODUCTION' ? TestIds.REWARDED : 'ca-app-pub-2120609105203416/2064046628';

  const dispatch = useDispatch();
  const answer = useSelector(answerGptSelector);
  const configData = useSelector(appConfig);

  const headerHeight = useHeaderHeight();

  const { Typing } = theme.images;
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Record<string, string>>({});
  const scrollRef = useRef<ScrollView>(null);

  //const BASE_URL = BuildConfig.API_BASE_URL;
  //const API_URL = `${BASE_URL}/api/`;
  // const getAnswer = async (question: string) => {
  //   try {
  //     const res = await axios.post(
  //       `${API_URL}ask-a-question`,
  //       { question: `${question}` },
  //     );
  //     return res?.data?.result;
  //   } catch (e) {
  //     console.error(e);
  //     return 'Something went wrong!! ??????';
  //   }
  // };

  const handleSubmit = () => {

    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
    setConversation(prev => ({
      ...prev,
      ...{ [`sent${Object.keys(prev)?.length}`]: text },
    }));
    setText('');
    setLoading(true);
    dispatch(getAnswerGpt(text));
    // setLoading(false);
    // setConversation(prev => ({
    //   ...prev,
    //   ...{ [`received${Object.keys(prev)?.length}`]: answer },
    // }));
    // setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
  };

  const rewarded = RewardedAd.createForAdRequest(rewAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {

    if (answer !== '') { dispatch(setEmptyAnswer()) }
    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
    setConversation(prev => ({}));

    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      rewarded.show();
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };

  }, []);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  useEffect(() => {
    setLoading(false);
    setConversation(prev => ({
      ...prev,
      ...{ [`received${Object.keys(prev)?.length}`]: answer },
    }));
    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
  }, [answer]);


  return (
    <Container topMargin={headerHeight}>
      <BodyContainer>
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
        <View>
          <ScrollView
            ref={scrollRef}
            keyboardDismissMode="interactive"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={styles.scrollView}>
            {Object?.keys(conversation)?.map(keyName => {
              if (keyName?.includes('sent')) {
                return (
                  <View
                    key={`sent${keyName}`}
                    style={[styles.sent, styles.chatBubble]}>
                    <Text
                      selectable
                      selectionColor={'purple'}
                      style={styles.msgText}>
                      {conversation?.[keyName]}
                    </Text>
                  </View>
                );
              }
              return (
                <View key={keyName} style={[styles.received, styles.chatBubble]}>
                  <Text selectable selectionColor={'yellow'} style={styles.msgText}>
                    {conversation?.[keyName]?.replace('\n', '')?.replace('\n', '')}
                  </Text>
                </View>
              );
            })}
            {loading && (
              <View
                key={'typingLoader'}
                style={[styles.received, styles.chatBubble]}>
                <Image
                  resizeMode="contain"
                  source={Typing}
                  style={styles.typingLoader}
                />
              </View>
            )}
          </ScrollView>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput
              blurOnSubmit
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              keyboardAppearance={'dark'}
              keyboardType={'web-search'}
              style={styles.input}
              placeholder="Ask a Question ?"
              value={text}
              onChangeText={setText}
              onSubmitEditing={handleSubmit}
              placeholderTextColor={'#1116'}
            />
          </KeyboardAvoidingView>
        </View>
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
      </BodyContainer>

    </Container>

  );
}
