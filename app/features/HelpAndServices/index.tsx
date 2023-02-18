import React, { useState } from 'react';
import { Modal } from 'react-native';
import Background from '@app/components/Background';
import theme from '@app/config/theme';
import { s, vs } from '@app/utils/styles';
import {
  Container,
  HeadContainer,
  BodyContainer,
  FooterContainer,
  FooterText,
  Title,
  Touchable,
  ServicesContainer,
  ServiceContainer,
  ServiceName,
} from './components';

export default function HelpAndServices() {
  const {
    BgSplit,
    LogoBlanc,
    ArrowDown,
    ArrowUp,
    User,
    Location,
    Contact,
    Calculator,
    Info,
    Balance,
  } = theme.images;

  const [modalVisible, setModalVisible] = useState(false);

  const services = [
    // {
    //   id: 'ser-1',
    //   name: 'Mood Detector',
    //   icon: User,
    //   action: () => { },
    // },
    // {
    //   id: 'ser-2',
    //   name: 'Lie Detector',
    //   icon: User,
    //   action: () => { },
    // },
    {
      id: 'ser-1',
      name: 'Contactez nous',
      icon: Contact,
      action: () => { },
    },
    {
      id: 'ser-2',
      name: 'A propos',
      icon: Info,
      action: () => { },
    },
  ];

  return (
    <>
      <Touchable onPress={() => setModalVisible(true)}>
        <ArrowUp width={s(12)} height={vs(12)} fill={theme.colors.SECONDARY} />
        <FooterText>Aide & services</FooterText>
      </Touchable>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { }}
      >
        <Background source={BgSplit}>
          <Container>
            <HeadContainer>
              {/* <LogoBlanc width={s(180)} height={vs(106)} /> */}
            </HeadContainer>
            <BodyContainer>
              <Touchable onPress={() => setModalVisible(false)}>
                <Title>Aide & services</Title>
                <ArrowDown width={s(20)} height={vs(20)} />
              </Touchable>
              <ServicesContainer>
                {services.map(({ id, name, icon: Icon, action }) => (
                  <ServiceContainer key={id} onPress={action}>
                    <ServiceName>{name}</ServiceName>
                    <Icon
                      width={s(18)}
                      height={vs(18)}
                      fill={theme.colors.SECONDARY}
                    />
                  </ServiceContainer>
                ))}
              </ServicesContainer>
            </BodyContainer>
            <FooterContainer>
              <FooterText>v1.0.0</FooterText>
            </FooterContainer>
          </Container>
        </Background>
      </Modal>
    </>
  );
}
