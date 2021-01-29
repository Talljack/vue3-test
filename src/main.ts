import { createApp } from "vue";
import { setupI18n } from "@/i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
setupI18n(app);

app
  .use(store)
  .use(router)
  .mount("#app");
