import styled from 'styled-components/native';
import { s, ms } from '@app/utils/styles';

export const LangItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${ms(10)}px ${ms(5)}px;
  border-bottom-color: ${(props) => props.theme.colors.SECONDARY_LIGHT};
  border-bottom-width: 1px;
  border-style: solid;
`;

export const LangContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${s(150)}px;
`;

export const LangItemText = styled.Text`
  padding: ${ms(5)}px ${ms(10)}px;
`;
