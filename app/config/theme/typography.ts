import { scaleFont } from '@app/utils/styles';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Font-Regular';
export const FONT_FAMILY_SEMI_BOLD = 'Font-Semi-Bold';
export const FONT_FAMILY_SEMI_LIGHT = 'Font-Semi-Light';
export const FONT_FAMILY_LIGHT = 'Font-Light';
export const FONT_FAMILY_ITALIC = 'Font-Italic';
export const FONT_FAMILY_BOLD_ITALIC = 'Font-Bold-Italic';
export const FONT_FAMILY_BOLD = 'Font-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export default {
  fontFamily: {
    regular: FONT_FAMILY_REGULAR,
    semiBold: FONT_FAMILY_SEMI_BOLD,
    semiLight: FONT_FAMILY_SEMI_LIGHT,
    light: FONT_FAMILY_LIGHT,
    italic: FONT_FAMILY_ITALIC,
    boldItalic: FONT_FAMILY_BOLD_ITALIC,
    bold: FONT_FAMILY_BOLD,
  },
};
