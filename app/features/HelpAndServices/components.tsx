import styled from 'styled-components/native';
import { scaleFont, ms, s, vs } from '@app/utils/styles';

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

export const BodyContainer = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  flex: 0.5;
  justify-content: flex-end;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: ${scaleFont(18)}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  line-height: ${vs(30)}px;
  color: ${(props) => props.theme.colors.PRIMARY_DARK};
`;

export const Title = styled.Text`
  font-size: ${scaleFont(30)}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
  line-height: ${vs(60)}px;
  color: ${(props) => props.theme.colors.SECONDARY};
`;

export const Touchable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: ${ms(10)}px;
`;

export const ServicesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const ServiceContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${s(150)}px;
  height: ${vs(60)}px;
  padding: ${ms(10)}px ${ms(15)}px;
  margin: ${ms(10)}px ${ms(5)}px;
  border: ${s(1)}px solid ${(props) => props.theme.colors.SECONDARY_LIGHT};
  border-radius: ${s(13)}px;
`;

export const ServiceName = styled.Text`
  font-size: ${scaleFont(12)}px;
  font-family: ${(props) => props.theme.fontFamily.semiBold};
  line-height: ${vs(14)}px;
  color: ${(props) => props.theme.colors.SECONDARY_LIGHT};
`;
