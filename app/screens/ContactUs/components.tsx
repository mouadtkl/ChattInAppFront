import styled from 'styled-components/native';
import { scaleFont, ms, vs, s } from '@app/utils/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.WHITE};
`;

export const HeaderContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  padding: ${ms(10)}px ${ms(25)}px;
`;

export const BodyContainer = styled.ScrollView`
  flex: 3;
  padding: ${ms(25)}px ${ms(5)}px;
`;

export const FooterContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.colors.PRIMARY};
  border-top-right-radius: ${ms(20)}px;
  border-top-left-radius: ${ms(20)}px;
`;

export const ScreenDesc = styled.Text`
  font-size: ${scaleFont(20)}px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.regular};
  line-height: ${vs(19)}px;
  color: ${(props) => props.theme.colors.PRIMARY_DARK};
  margin: ${ms(15)}px ${ms(0)}px;
`;

export const Description = styled.Text`
  font-size: ${scaleFont(18)}px;
  letter-spacing: ${s(0)}px;
  text-align: center;
  line-height: ${vs(22)}px;
  margin: ${ms(5)}px;
  padding: ${ms(1)}px ${ms(30)}px;
  font-family: ${(props) => props.theme.fontFamily.light};
  color: ${(props) => props.theme.colors.SECONDARY};
`;
