import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const platformType = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

export const dimensions = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  widthUnit: Dimensions.get('window').width / 100,
  heightUnit: Dimensions.get('window').height / 100,
};

export const appInfos = {
  deviceId: DeviceInfo.getUniqueId(),
  buildNumber: DeviceInfo.getBuildNumber(),
  readableVersion: DeviceInfo.getReadableVersion(),
  model: DeviceInfo.getModel(),
  manufacturer: DeviceInfo.getManufacturer(),
  systemName: DeviceInfo.getSystemName(),
  systemVersion: DeviceInfo.getSystemVersion(),
};
