declare module 'react-native-config' {
  interface Env {
    ENV: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION';
    CHAT_BASE_URL: 'https://chatty-server-inky.vercel.app';
    CONFIG_BASE_URL: 'https://mouadtkl.github.io';
  }
  const Config: Env;
  export default Config;
}
