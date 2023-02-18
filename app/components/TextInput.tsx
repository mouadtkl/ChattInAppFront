import React, { useState } from 'react';
import styled from 'styled-components/native';
import { scaleFont, s, vs, ms } from '@app/utils/styles';
import theme from '@app/config/theme';

const { Invisible, Visible } = theme.images;

const TextInputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: ${vs(5)}px 0px;
  border-radius: ${s(30)}px;
  shadow-color: ${(props) => props.theme.colors.WHITE};
  shadow-offset: ${s(0)}px ${vs(2)}px;
  shadow-opacity: ${(props) => (props.withShadow ? 0.23 : 0)};
  shadow-radius: ${(props) => (props.withShadow ? 2.62 : 0)}px;
  elevation: ${(props) => (props.withShadow ? 4 : 0)};
`;

const StyledTextInput = styled.TextInput`
  font-size: ${scaleFont(16)}px;
  letter-spacing: ${s(1)}px;
  text-align: left;
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors.BLACK};
  padding: 0px ${(props) => (props.isPwInput ? ms(45) : ms(20))}px 0px
    ${ms(30)}px;
  height: ${vs(50)}px;
  width: ${(props) => s(props.width || 300)}px;
  border-width: ${s(1)}px;
  border-style: solid;
  border-top-color: ${(props) =>
    props.error ? props.theme.colors.ERROR : props.theme.colors.GRAY};
  border-right-color: ${(props) =>
    props.error ? props.theme.colors.ERROR : props.theme.colors.GRAY};
  border-left-color: ${(props) =>
    props.error ? props.theme.colors.ERROR : props.theme.colors.GRAY};
  border-bottom-color: ${(props) =>
    props.error ? props.theme.colors.ERROR : props.theme.colors.GRAY};
  border-radius: ${s(30)}px;
  background-color: ${(props) => props.theme.colors.WHITE};
`;

export const ErrorMsg = styled.Text`
  font-size: ${scaleFont(10)}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  line-height: ${vs(12)}px;
  color: ${(props) => props.theme.colors.ERROR};
  margin: 0px ${ms(5)}px;
`;

export const LeftIconContainer = styled.View`
  position: absolute;
  top: ${vs(17)}px;
  left: ${ms(10)}px;
  z-index: 9;
`;

export const RightIconContainer = styled.TouchableOpacity`
  padding: ${ms(8)}px;
  position: absolute;
  top: ${vs(4)}px;
  right: ${ms(4)}px;
  z-index: 9;
  background-color: ${(props) =>
    props.iconType === 'round'
      ? props.theme.colors.PRIMARY_LIGHT
      : 'transparent'};
  padding: ${ms(8)}px;
  border-radius: ${s(30)}px;
`;
export interface TextInputProps {
  onChangeText: Function;
  onBlur?: Function;
  value: string;
  icon?: Function;
  iconPosition?: 'right' | 'left';
  iconType?: 'normal' | 'round';
  iconColor?: string;
  onIconPress?: Function;
  placeholder?: string;
  type?: 'text' | 'password';
  width?: number;
  withShadow?: boolean;
  error?: string | undefined;
  disabled?: boolean;
}

function TextInput({
  onChangeText,
  onBlur,
  value,
  placeholder,
  icon: Icon,
  iconPosition,
  iconType,
  iconColor,
  onIconPress,
  type,
  width,
  withShadow,
  error,
  disabled,
}: TextInputProps) {
  const isPwInput: boolean = type === 'password';
  const [pwHidden, setPwHidden] = useState<boolean>(!!isPwInput);

  return (
    <>
      <TextInputContainer withShadow={withShadow}>
        {Icon && iconPosition === 'left' && (
          <LeftIconContainer>
            <Icon width={s(15)} height={vs(15)} fill={iconColor} />
          </LeftIconContainer>
        )}
        <StyledTextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={pwHidden}
          isPwInput={isPwInput}
          width={width}
          error={error}
          editable={!disabled}
        />
        {isPwInput && (
          <RightIconContainer onPress={() => setPwHidden(!pwHidden)}>
            {pwHidden ? (
              <Invisible width={s(25)} height={vs(25)} />
            ) : (
              <Visible width={s(25)} height={vs(25)} />
            )}
          </RightIconContainer>
        )}
        {Icon && iconPosition === 'right' && (
          <RightIconContainer iconType={iconType} onPress={onIconPress}>
            <Icon width={s(25)} height={vs(25)} fill={iconColor} />
          </RightIconContainer>
        )}
      </TextInputContainer>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
}

TextInput.defaultProps = {
  type: 'text',
  iconColor: theme.colors.BLACK,
  disabled: false,
};

export default TextInput;
