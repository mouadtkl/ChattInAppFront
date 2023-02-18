import styled from 'styled-components/native';
import { scaleFont, ms, vs } from '@app/utils/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${ms(10)}px ${ms(5)}px;
`;

export const HeadContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const HeadMessage = styled.Text`
  font-size: ${scaleFont(16)}px;
  font-family: ${(props) => props.theme.fontFamily.semiBold};
  line-height: ${vs(30)}px;
  color: ${(props) => props.theme.colors.PRIMARY_DARK};
  margin: ${ms(10)}px ${ms(5)}px;
`;

export const BodyContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
