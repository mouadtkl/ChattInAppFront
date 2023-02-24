import React, { useEffect, useCallback, useState, useRef } from 'react';
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
import { getAnswerGpt, setEmptyAnswer } from '@app/store/reducers/chatgpt/chatgpt.actions';
import { answerGptSelector } from '@app/store/reducers/chatgpt/chatgpt.selectors';
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { TestIds, RewardedAd, RewardedAdEventType, InterstitialAd, AdEventType, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

import styles from './styles';

export default function QAndA({ navigation }) {

  const dispatch = useDispatch();
  const answer = useSelector(answerGptSelector);
  const headerHeight = useHeaderHeight();


  const { Typing } = theme.images;
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Record<string, string>>({});
  const scrollRef = useRef<ScrollView>(null);


  const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  //const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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


  const handleSubmit = () => {

    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
    setConversation(prev => ({
      ...prev,
      ...{ [`sent${Object.keys(prev)?.length}`]: text },
    }));
    setText('');
    setLoading(true);
    dispatch(getAnswerGpt(text));
    // const answer = await getAnswer(text);
    // setLoading(false);
    // setConversation(prev => ({
    //   ...prev,
    //   ...{ [`received${Object.keys(prev)?.length}`]: answer },
    // }));
    // setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
  };

  useEffect(() => {
    if (answer !== '') { dispatch(setEmptyAnswer()) }
    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
    setConversation(prev => ({}));
  }, []);

  useEffect(() => {
    //if(answer !== '') {dispatch(setEmptyAnswer())}
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
      </BodyContainer>
    </Container>

  );
}
