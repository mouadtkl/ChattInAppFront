/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Easing, Animated, View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import theme from '@app/config/theme';

export default function CircularProgress({
  percentage = 10,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = theme.colors.SECONDARY,
  delay = 500,
  bgColor = theme.colors.SECONDARY_LIGHT,
  max = 100,
  children,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef<any>(null);
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = React.useCallback(
    (toValue: number) =>
      Animated.timing(animated, {
        delay,
        toValue,
        duration,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(),
    [animated, delay, duration],
  );

  React.useEffect(() => {
    animation(percentage);
    animated.addListener((v) => {
      const maxPerc = (100 * v.value) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animated.removeAllListeners();
    };
  }, [animated, animation, circumference, max, percentage]);

  return (
    <View style={{ width: radius * 2, height: radius * 2, margin: 10 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={bgColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: radius * 2,
          height: radius * 2,
        }}
      >
        {children}
      </View>
    </View>
  );
}
