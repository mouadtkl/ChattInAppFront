import { PixelRatio } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

/**
 * return a linear scaled result of the provided size, based on your device's screen width.
 * @param size in dp or dip
 */
export const s = (size: number): number => scale(size);

/**
 * return a linear scaled result of the provided size, based on your device's screen height.
 * @param size in dp or dip
 */
export const vs = (size: number): number => verticalScale(size);

/**
 * Sometimes you don't want to scale everything in a linear manner, that's where moderateScale comes in.
 * The cool thing about it is that you can control the resize factor (default is 0.5).
 * If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:
 * ➡️ scale(10) = 20
 * ➡️ moderateScale(10) = 15
 * ➡️ moderateScale(10, 0.1) = 11
 * @param size in dp or dip
 * @param factor in dp or dip
 */
export const ms = (size: number, factor: number = 0.5): number =>
  moderateScale(size, factor);

/**
 * return a linear scaled result of the provided size, based on your device's front scale.
 * @param size in sp or sip
 */
export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale();

export function spacing(
  top,
  right = top,
  bottom = top,
  left = right,
  property,
) {
  const styles = {};

  styles[`${property}Top`] = ms(top);
  styles[`${property}Right`] = ms(right);
  styles[`${property}Bottom`] = ms(bottom);
  styles[`${property}Left`] = ms(left);

  return styles;
}

export function margin(top, right, bottom, left) {
  return spacing(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
  return spacing(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
