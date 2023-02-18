import VersionNumber from 'react-native-version-number';

export default class VersionHandler {
  static MUST_UPDATE = 2;

  static NOTIF_USER_ONLY = 1;

  static APP_IS_UP_TO_DATE = -1;

  static shouldIUpdate(vcServer) {
    const versionCA = VersionNumber.buildVersion.toString();
    if (versionCA.charAt(0) < vcServer.charAt(0)) {
      return VersionHandler.MUST_UPDATE;
    }
    if (versionCA.charAt(1) < vcServer.charAt(1)) {
      return VersionHandler.MUST_UPDATE;
    }
    if (versionCA.charAt(2) < vcServer.charAt(2)) {
      return VersionHandler.NOTIF_USER_ONLY;
    }
    return VersionHandler.APP_IS_UP_TO_DATE;
  }
}
