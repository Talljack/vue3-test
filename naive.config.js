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
      frontend: FRONTND_URL || "/",
      env: ["VUE_APP_ENV=web", "NODE_ENV=production"]
      //可以添加一些其他服务的地址
    },
    production: {
      backend: BACKEND_URL || "http://130.20.120.11",
      frontend: FRONTND_URL || "//localhost:8140",
      env: ["VUE_APP_ENV=production", "NODE_ENV=production"]
      //可以添加一些其他服务的地址
    }
  },
  dockerConfig: {
    loginUrl: "artifactory.tusimple.ai",
    dockerPrefix: `artifactory.tusimple.ai/docker-ecs/mojo/frontend`,
    dockerDefaultTag: `mojo`
  }
};

module.exports = config;
