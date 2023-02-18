import React from 'react';
import styled from 'styled-components/native';
import { scaleFont, s, vs, ms } from '@app/utils/styles';
import theme from '@app/config/theme';

function getBtnBgColor(type, themeColor) {
  if (type === 'primary') return themeColor.PRIMARY_DARK;
  if (type === 'secondary') return themeColor.PRIMARY_LIGHT;
  if (type === 'select' || type === 'selected') return themeColor.SECONDARY;
  if (type === 'notselected') return themeColor.WHITE;

  return themeColor.PRIMARY_DARK;
}

function getBtnBorderColor(type, themeColor) {
  if (type === 'primary' || type === 'secondary')
    return themeColor.PRIMARY_DARK;
  if (type === 'select' || type === 'selected') return themeColor.GRAY;
  if (type === 'notselected') return themeColor.SECONDARY;

  return themeColor.PRIMARY_DARK;
}

function getBtnTextColor(type, themeColor) {
  if (type === 'primary') return themeColor.WHITE;
  if (type === 'secondary') return themeColor.PRIMARY_DARK;
  if (type === 'select' || type === 'selected') return themeColor.WHITE;
  if (type === 'notselected') return themeColor.SECONDARY;

  return themeColor.WHITE;
}

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'right' ? 'row' : 'row-reverse'};
  justify-content: ${({ iconType }) =>
    iconType === 'round' ? 'flex-end' : 'center'};
  align-items: center;
  background-color: ${(props) => getBtnBgColor(props.type, props.theme.colors)};
  border: ${s(1)}px solid
    ${(props) => getBtnBorderColor(props.type, props.theme.colors)};
  border-radius: ${s(30)}px;
  height: ${vs(50)}px;
  margin: ${ms(10)}px 0px;
  padding: 0px ${({ iconType }) => (iconType === 'round' ? ms(5) : ms(30))}px;
  width: ${(props) => s(props.width || 300)}px;
  shadow-color: ${(props) => props.theme.colors.WHITE};
  shadow-offset: ${s(0)}px ${vs(2)}px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4;
`;

const ButtonText = styled.Text`
  font-size: ${scaleFont(16)}px;
  letter-spacing: ${s(1)}px;
  text-align: center;
  line-height: ${vs(44)}px;
  font-family: ${(props) => props.theme.fontFamily.semiBold};
  color: ${(props) => getBtnTextColor(props.type, props.theme.colors)};
  text-transform: uppercase;
  padding: 0px ${ms(15)}px;
`;

export const IconContainer = styled.View`
  background-color: ${(props) =>
    getBtnTextColor(props.type, props.theme.colors)};
  padding: ${ms(8)}px;
  border-radius: ${s(30)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const InfoText = styled.Text`
  align-self: flex-start;
  font-size: ${scaleFont(10)}px;
  font-family: ${(props) => props.theme.fontFamily.light};
  text-align: left;
  line-height: ${vs(12)}px;
  color: ${(props) => props.theme.colors.GRAY_DARK};
  text-transform: capitalize;
  padding: 0px ${ms(30)}px;
  margin: 0px 0px ${ms(10)}px 0px;
`;

export interface ButtonProps {
  onPress: Function;
  title: string;
  type: 'primary' | 'secondary' | 'select' | 'selected' | 'notselected';
  icon?: Function;
  iconPosition?: 'right' | 'left';
  iconType?: 'normal' | 'round';
  info?: string;
  disabled?: Boolean;
  width?: number;
}

function Button({
  onPress,
  title,
  type,
  icon: Icon,
  iconPosition,
  iconType,
  info,
  disabled,
  width,
}: ButtonProps) {
  return (
    <>
      <ButtonContainer
        onPress={onPress}
        type={type}
        iconPosition={iconPosition}
        iconType={iconType}
        disabled={disabled}
        width={width}
      >
        <ButtonText type={type}>{title}</ButtonText>
        {Icon &&
          (iconType === 'round' ? (
            <IconContainer type={type}>
              <Icon
                width={s(22)}
                height={vs(22)}
                fill={
                  type === 'notselected'
                    ? theme.colors.WHITE
                    : theme.colors.PRIMARY_DARK
                }
              />
            </IconContainer>
          ) : (
            <Icon width={s(22)} height={vs(22)} fill={theme.colors.WHITE} />
          ))}
      </ButtonContainer>
      {info && <InfoText>{info}</InfoText>}
    </>
  );
}

Button.defaultProps = {
  iconPosition: 'right',
  iconType: 'normal',
  icon: undefined,
  info: undefined,
};

export default Button;
