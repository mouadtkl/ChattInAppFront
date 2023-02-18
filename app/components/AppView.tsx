import React from 'react';
import styled from 'styled-components/native';
import { platformType } from '@app/utils/device';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const View = styled.View`
  flex: 1;
`;

export interface AppViewProps {
  children: React.ReactNode;
}

export default function AppView({ children }: AppViewProps) {
  return platformType.isIos ? (
    <SafeAreaView>{children}</SafeAreaView>
  ) : (
    <View>{children}</View>
  );
}
