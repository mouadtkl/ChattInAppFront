export const error = (state) => ({
  isVisible: state.common.msgVisible,
  message: state.common.message,
  messageCode: state.common.messageCode,
});
export const isApiCallsLoading = (state) => state.common.apiCallsInProgress > 0;
