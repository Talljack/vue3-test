import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    use: Function,
    locale: Function
  }
}
