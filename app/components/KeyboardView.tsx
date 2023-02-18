import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { platformType } from '@app/utils/device';

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});

export interface KeyboardViewProps {
  children: React.ReactNode;
}

function KeyboardView({ children }: KeyboardViewProps) {
  return (
    <KeyboardAvoidingView
      behavior={platformType.isIos ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default KeyboardView;
