import React, { useCallback, useState, useRef } from 'react';
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
// import { getAnswerGpt } from '@app/store/reducers/chatgpt/chatgpt.actions';
// import { answerGptSelector } from '@app/store/reducers/chatgpt/chatgpt.selectors';

import styles from './styles';

export default function QAndA({ navigation }) {

  // const dispatch = useDispatch();
  // const answer = useSelector(answerGptSelector);
  const headerHeight = useHeaderHeight();


  const { Typing } = theme.images;
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Record<string, string>>({});
  const scrollRef = useRef<ScrollView>(null);


  const BASE_URL = BuildConfig.API_BASE_URL;

  const API_URL = `${BASE_URL}/api/`;


  const getAnswer = async (question: string) => {
    try {
      const res = await axios.post(
        `${API_URL}ask-a-question`,
        { question },
      );
      return res?.data?.result;
    } catch (e) {
      console.error(e);
      return 'Something went wrong!! ☹️';
    }
  };

  const handleSubmit = useCallback(async () => {

    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
    setConversation(prev => ({
      ...prev,
      ...{ [`sent${Object.keys(prev)?.length}`]: text },
    }));
    setText('');
    setLoading(true);
    //dispatch(getAnswerGpt(text));
    const answer = await getAnswer(text);
    setLoading(false);
    setConversation(prev => ({
      ...prev,
      ...{ [`received${Object.keys(prev)?.length}`]: answer },
    }));
    setTimeout(() => scrollRef?.current?.scrollToEnd({ animated: true }), 200);
  }, [text]);

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
      </BodyContainer>
    </Container>

  );
}
