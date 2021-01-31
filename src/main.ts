import { createApp } from "vue";
import { setupI18n } from "@/i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NaiveUI from "naive-ui";
import Nimbus from "nimbus-sdk";
import jwtDecode from "jwt-decode";
import { getMessage } from "../utils/message";
import { authUser } from "./sso";
import { isAdmin } from "@/Api/request";
import * as TYPE from "@/store/mutation-types";
import { TokenData } from "./types/global";
const app = createApp(App);
app.use(NaiveUI);
setupI18n(app);
// if (Nimbus.connected === true) {
//   // eslint-disable-next-line no-unused-vars
//   const { theme, userInfo } = Nimbus.nimbusCommonData;
//   store.commit(TYPE.MODIFY_USER_INFO, userInfo);

//   store.commit(TYPE.MODIFY_THEME, theme);
//   Nimbus.$twsObserver.on("tws_getCurrentTheme_result", themeValue => {
//     store.commit(TYPE.MODIFY_THEME, themeValue);
//     console.warn("Nimbus: theme", themeValue);
//   });
//   Nimbus.$twsObserver.on("tws_getToken_result", token => {
//     store.commit(TYPE.MODIFY_TOKEN, token);
//   });
//   Nimbus.$twsObserver.emit("tws_getToken");
// }
(async function initVueInstance() {
  if (!Nimbus.connected) {
    // TODO:login by saml
    let messageInstance = app.config.globalProperties.$NMessage.loading(
      "Loading..."
    );
    try {
      const res = await authUser();
      const user = res.result;
      // 设置metadata
      store.commit("MODIFY_TOKEN", "Bearer " + user.bearerToken);
      console.log("beartoken", user.bearerToken);
      const tokenData: TokenData = jwtDecode(user.bearerToken);
      const admin = await isAdmin();
      store.commit(TYPE.MODIFY_ADMIN, admin.admin);
      // 设置过期重新登录
      const delayToRefresh = tokenData.exp * 1000 - new Date().getTime() + 5000;
      console.log(
        "initVueInstance -> tokenData.exp ",
        new Date(tokenData.exp * 1000)
      );
      setTimeout(async () => {
        try {
          const { result: userData } = await authUser();
          // 设置metadata
          store.commit("MODIFY_TOKEN", "Bearer " + user.bearerToken);
          store.commit(TYPE.MODIFY_USER_INFO, { ...userData });
        } catch (error) {
          window.location.reload();
        }
      }, delayToRefresh);
      store.commit(TYPE.MODIFY_USER_INFO, user);
      messageInstance.hide();
      messageInstance = null;
    } catch (error) {
      console.error("initVueInstance -> error", error);
      return;
    }
  }
  // const instance = new Vue({
  //   i18n,
  //   router,
  //   store,
  //   render: h => h(App)
  // });
  // window.$vue = instance;
  // instance.$mount(selector);
})();

app
  .use(store)
  .use(router)
  .mount("#app");
getMessage(app);
