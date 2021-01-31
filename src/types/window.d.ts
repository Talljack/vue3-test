import type { App, Vue } from 'vue';

declare global {
  declare interface Window {
    // Global vue app instance
    __GRPCWEB_DEVTOOLS__: any;
    $vue: Vue;
  }
}
