declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';

// Fix react-hook-form
type FileList = any;
type VoidFunction = () => void;
type Node = any;
type MutationObserverInit = any;
type HTMLOptionsCollection = any;
type MutationObserver = any;
declare module 'superstruct' {
  export type Struct = any;
}
