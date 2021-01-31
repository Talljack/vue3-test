import { Message } from "./types";
let message: Message;
export function getMessage(app) {
  message = app.config.globalProperties.message;
}
export default message;
