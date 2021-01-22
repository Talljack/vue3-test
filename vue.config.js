const path = require("path");
const env = process.env.VUE_APP_ENV || "development";
const { deploy: address } = require("./config");
const RESOURCE_BASE_ADDR = address[env].frontend;

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: env === "development" ? "/" : RESOURCE_BASE_ADDR,
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    port: 8140,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Service-Worker-Allowed": "/"
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      sass: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      },
      extensions: [".ts", ".tsx", ".js", ".vue"]
    }
  },
  chainWebpack: config => {
    config.optimization.minimizer("terser").tap(args => {
      args[0].terserOptions.compress = {
        // eslint-disable-next-line @typescript-eslint/camelcase
        pure_funcs: ["console.log"],
        warnings: false
      };
      return args;
    });
    config.module
      .rule()
      .test(/\.(js|vue)(\?.*)?$/)
      .pre()
      .include.add(resolve("src"))
      .end()
      .use()
      .loader("vuei18n-translate-loader")
      .options({
        langs: [
          {
            name: "en",
            path: resolve("src/assets/lang/en.json")
          },
          {
            name: "zh",
            path: resolve("src/assets/lang/cn.json")
          }
        ],
        translate: async function(from, to, key) {
          // 百度翻译开发者提供的appid以及secretKey
          return key + "-" + to;
        }
      });
  },
  transpileDependencies: ["vuex-module-decorators"]
};
