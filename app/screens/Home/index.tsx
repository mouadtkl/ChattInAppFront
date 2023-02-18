import React from 'react';
import Button from '@app/components/Button';
import { useHeaderHeight } from '@react-navigation/stack';
import HelpAndServices from '@app/features/HelpAndServices';
import theme from '@app/config/theme';
import useTranslation from '@app/i18n/useTranslation';
import { s, vs } from '@app/utils/styles';
import {
  Container,
  HeadContainer,
  Title,
  BodyContainer,
  FooterContainer,
} from './components';

const { ArrowDown, Bank, PersonalInfo } = theme.images;

export default function Auth({ navigation }) {
  const { translate } = useTranslation('Home');
  const headerHeight = useHeaderHeight();

  return (
    <Container topMargin={headerHeight}>
      <HeadContainer>
        <Title>CHAT GPT WORLD</Title>
        <ArrowDown width={s(20)} height={vs(20)} />
      </HeadContainer>
      <BodyContainer>
        <Button
          onPress={() => navigation.navigate('Chatt')}
          title="CHATTY"
          type="select"
          //icon={PersonalInfo}
          iconPosition="left"
          iconType="round"
        />
        <Button
          onPress={() => navigation.navigate('QAndA')}
          title="QUESTIONS & RESPONSES"
          type="select"
          //icon={Bank}
          iconPosition="left"
          iconType="round"
        />
      </BodyContainer>
      <FooterContainer>
        <HelpAndServices />
      </FooterContainer>
    </Container>
  );
}