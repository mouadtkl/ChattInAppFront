import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Background from '@app/components/Background';
import i18n from '@app/i18n';
import { getValue } from '@app/services/storage/asyncStorage';
import theme from '@app/config/theme';
import { BodyContainer } from './components';

const { BgHome } = theme.images;

function Boot({ navigation }) {
  async function loadLang() {
    const selectedLang = await getValue('selectedLang');
    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
      navigation.navigate('Guide');
    } else {
      navigation.navigate('Lang');
    }
  }

  useEffect(() => {
    (async function IIFE() {
      await loadLang();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background /*source={BgHome}*/>
      <BodyContainer>
        <ActivityIndicator size="large" color={theme.colors.PRIMARY_DARK} />
      </BodyContainer>
    </Background>
  );
}

export default Boot;
