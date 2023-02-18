import { platformType, dimensions } from '../../utils/device';

const metrics = {
  s5: 5,
  s8: 8,
  s10: 10,
  s16: 16,
  s20: 20,
  s30: 30,
  s40: 40,
  s50: 50,
  s60: 60,

  borderWidth: 0.4,

  horizontalLineHeight: 1,

  screenWidth:
    dimensions.WIDTH < dimensions.HEIGHT ? dimensions.WIDTH : dimensions.HEIGHT,
  screenHeight:
    dimensions.WIDTH < dimensions.HEIGHT ? dimensions.HEIGHT : dimensions.WIDTH,
  drawerWidth: (4 / 5) * dimensions.WIDTH,
  navBarHeight: platformType.isIos ? 64 : 54,

  buttonRadius: 4,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },

  fontSize: {
    tiny: 12,
    small: 14,
    medium: 16,
    large: 18,
    xl: 20,
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
