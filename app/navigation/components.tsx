import styled from 'styled-components/native';
import { scaleFont, s, ms, vs } from '@app/utils/styles';

export const HeaderContainer = styled.View`
  background-color: ${(props) =>
    props.withProgress ? props.theme.colors.PRIMARY : 'transparent'};
  padding: ${(props) => (props.withProgress ? ms(0) : ms(5))}px;
  shadow-color: ${(props) => props.theme.colors.WHITE};
  shadow-offset: ${s(0)}px ${vs(2)}px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CircularProgressText = styled.Text`
  font-size: ${scaleFont(10)}px;
  font-family: ${(props) => props.theme.fontFamily.boldItalic};
  line-height: ${vs(14)}px;
  color: ${(props) => props.theme.colors.SECONDARY};
`;

export const BackBtn = styled.TouchableOpacity`
  padding: ${ms(10)}px ${ms(15)}px;
  margin: ${ms(10)}px ${ms(5)}px;
`;

export const ScreenTitle = styled.Text`
  font-size: ${scaleFont(16)}px;
  font-family: ${(props) => props.theme.fontFamily.semiBold};
  line-height: ${vs(19)}px;
  color: ${(props) => props.theme.colors.SECONDARY_LIGHT};
  text-transform: uppercase;
`;
