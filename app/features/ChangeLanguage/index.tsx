import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import i18n, { langs } from '@app/i18n';
import theme from '@app/config/theme';
import { s, vs } from '@app/utils/styles';
import { saveValue } from '@app/services/storage/asyncStorage';
import { LangItemContainer, LangContainer, LangItemText } from './components';

const { Selected } = theme.images;

function LangItem({ label, flagIcon: FlagIcon, isSelected, onPress }) {
  return (
    <LangItemContainer onPress={onPress}>
      <LangContainer>
        <FlagIcon width={s(30)} height={vs(30)} />
        <LangItemText>{label}</LangItemText>
      </LangContainer>
      {isSelected && (
        <Selected
          width={s(20)}
          height={vs(20)}
          fill={theme.colors.SECONDARY_LIGHT}
        />
      )}
    </LangItemContainer>
  );
}

export default function ChangeLanguage() {
  const { language } = i18n;
  const [selectedLang, setSelectionLang] = useState(language);

  useEffect(() => {
    setSelectionLang(language);
  }, [language]);

  const onLangChange = useCallback(
    (newLang) => {
      if (newLang !== selectedLang)
        i18n.changeLanguage(newLang, () => {
          setSelectionLang(newLang);
          saveValue('selectedLang', newLang);
        });
    },
    [selectedLang],
  );

  const renderLangItem = ({ item }) => (
    <LangItem
      label={item.label}
      flagIcon={item.flagIcon}
      isSelected={selectedLang === item.key}
      onPress={() => onLangChange(item.key)}
    />
  );

  return (
    <View>
      <FlatList
        data={langs}
        renderItem={renderLangItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
