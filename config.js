const FRONTND_URL = process.env.VUE_APP_FRONT_URL;
const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

const config = {
  deploy: {
    development: {
      backend: BACKEND_URL || "http://130.20.120.11",
      frontend: FRONTND_URL || "//localhost:8140"
      //可以添加一些其他服务的地址
    },
    web: {
      backend: BACKEND_URL || "http://130.20.120.11",
      frontend: FRONTND_URL || "//localhost:8140"
      //可以添加一些其他服务的地址
    },
    production: {
      backend: BACKEND_URL || "http://130.20.120.11",
      frontend: FRONTND_URL || "//localhost:8140"
      //可以添加一些其他服务的地址
    }
  }
};

module.exports = config;
