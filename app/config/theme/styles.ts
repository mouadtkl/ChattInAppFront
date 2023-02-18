import { css } from 'styled-components';
import {
  FONT_REGULAR,
  FONT_BOLD,
  FONT_SIZE_16,
  FONT_SIZE_12,
} from './typography';

const mainText = css`
  font-family: ${FONT_BOLD.fontFamily};
  font-weight: ${FONT_BOLD.fontWeight};
  font-size: ${FONT_SIZE_16}px;
`;

const subText = css`
  font-family: ${FONT_REGULAR.fontFamily};
  font-weight: ${FONT_REGULAR.fontWeight};
  font-size: ${FONT_SIZE_12}px;
`;

export default {
  mainText,
  subText,
};
