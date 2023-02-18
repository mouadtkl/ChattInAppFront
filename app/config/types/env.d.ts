declare module 'react-native-config' {
  interface Env {
    ENV: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION';
    API_BASE_URL: 'https://chatty-server-inky.vercel.app';
  }
  const Config: Env;
  export default Config;
}
