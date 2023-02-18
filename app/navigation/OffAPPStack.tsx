import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@app/screens/Home';
import Guide from '@app/screens/Guide';
import Chatt from '@app/screens/Chatt';
import QAndA from '@app/screens/QAndA';
import Language from '@app/screens/Language';
import Boot from '@app/screens/Boot';
import theme from '@app/config/theme';
import { s, vs } from '@app/utils/styles';
import CircularProgress from '@app/components/CircularProgress';
import {
  HeaderContainer,
  CircularProgressText,
  BackBtn,
  ScreenTitle,
  HeaderWrapper,
} from './components';

const STEPS_NBR = 5;

function NavBar(props) {
  const {
    navigation,
    options: { backTo, title, withProgress, step },
  } = props;
  const { ArrowLeft } = theme.images;
  const goBack = () => navigation.goBack();
  const navigate = () => navigation.navigate(backTo);

  return (
    <HeaderContainer withProgress={!!withProgress}>
      <HeaderWrapper>
        <BackBtn onPress={backTo ? navigate : goBack}>
          <ArrowLeft
            width={s(18)}
            height={vs(18)}
            fill={theme.colors.SECONDARY}
          />
        </BackBtn>
        {withProgress && (
          <>
            <ScreenTitle>{title}</ScreenTitle>
            <CircularProgress
              percentage={(100 / STEPS_NBR) * step}
              delay={500 * 1}
              max={100}
              radius={25}
              strokeWidth={7}
              bgColor={theme.colors.WHITE}
              color={theme.colors.SECONDARY}
            >
              <CircularProgressText>
                {step}/{STEPS_NBR}
              </CircularProgressText>
            </CircularProgress>
          </>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const screenOptions = {
  BecomeClient: { backTo: 'Home' },
  Nationality: {
    step: 1,
    withProgress: true,
    title: 'Je choisis ma nationalité',
  },
  Scan: { step: 2, withProgress: true, title: 'Je scanne mes documents' },
  Form: { step: 3, withProgress: true, title: 'Je remplis mes informations' },
  Agency: { step: 4, withProgress: true, title: 'Je choisi mon agence' },
};

const headerScreenOptions = (props) => {
  const {
    navigation,
    route: { name },
  } = props;
  return {
    header: (headerProps) => {
      const options = screenOptions[name] || {};
      return (
        <NavBar
          {...headerProps}
          {...props}
          options={options}
          navigation={navigation}
        />
      );
    },
  };
};

const Stack = createStackNavigator();

export default function OffAPPStack() {
  return (
    <Stack.Navigator
      initialRouteName="Boot"
      screenOptions={headerScreenOptions}
    >
      <Stack.Screen
        name="Boot"
        component={Boot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lang"
        component={Language}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guide"
        component={Guide}
        options={{ headerTransparent: true }}
      />
      <Stack.Screen
        name="Chatt"
        component={Chatt}
        options={{ headerTransparent: true }}
      />
      <Stack.Screen
        name="QAndA"
        component={QAndA}
        options={{ headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
