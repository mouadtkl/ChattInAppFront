import styled from 'styled-components/native';
import { scaleFont, s, vs, ms } from '@app/utils/styles';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const SkipContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${ms(5)}px;
  right: ${ms(5)}px;
  background-color: transparent;
  margin: ${ms(10)}px;
  padding: ${ms(5)}px;
  z-index: 9;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SkipText = styled.Text`
  font-size: ${scaleFont(15)}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors.PRIMARY_DARK};
  text-transform: uppercase;
  padding: ${ms(0)}px ${ms(5)}px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  background-color: ${(props) => props.theme.colors.PRIMARY};
`;

export const ContentContainer = styled.View`
  flex: 3.5;
  justify-content: center;
  align-items: center;
`;

export const ActionsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeadContainer = styled.View`
  flex: 2.5;
  justify-content: center;
  align-items: center;
`;

export const BodyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${scaleFont(28)}px;
  letter-spacing: ${s(0)}px;
  text-align: center;
  line-height: ${vs(32)}px;
  margin: ${ms(10)}px ${ms(5)}px ${ms(0)}px ${ms(5)}px;
  padding: ${ms(10)}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.theme.colors.SECONDARY};
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
