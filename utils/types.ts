export interface Message {
  error: (string, Object) => {};
  info: (string, Object) => {};
  success: (string, Object) => {};
  warning: (string, Object) => {};
}
