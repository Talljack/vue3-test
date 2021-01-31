import { createStore } from "vuex";
import mutations from "./mutations";
import * as getters from "./getters";
import state from "./state";
import { createLogger } from "vuex";
const debug = process.env.NODE_ENV !== "production";
export default createStore({
  state,
  mutations,
  getters,
  plugins: debug ? [createLogger()] : [],
  strict: debug
});
