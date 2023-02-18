import styled from 'styled-components/native';
import { scaleFont, ms, vs } from '@app/utils/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.WHITE};
  padding-top: ${(props) => props.topMargin || 0}px;
`;

export const Title = styled.Text`
  font-size: ${scaleFont(30)}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  line-height: ${vs(60)}px;
  color: ${(props) => props.theme.colors.SECONDARY};
`;

export const HeadContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const BodyContainer = styled.View`
  flex: 2.5;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  flex: 0.5;
  justify-content: flex-end;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: ${scaleFont(12)}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  line-height: ${vs(24)}px;
  color: ${(props) => props.theme.colors.PRIMARY_DARK};
`;
