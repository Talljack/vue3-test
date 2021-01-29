import { createI18n, I18n, I18nOptions } from "vue-i18n";
import cn from "@/assets/lang/cn.json";
import en from "@/assets/lang/en.json";
import { App } from "vue";

const localeData: I18nOptions = {
  locale: "EN",
  messages: {
    CN: cn,
    EN: en
  }
};

export let i18n: I18n;

export function setupI18n(app: App) {
  i18n = createI18n(localeData) as I18n;
  app.use(i18n);
}
