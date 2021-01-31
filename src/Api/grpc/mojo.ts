// eslint-disable-next-line camelcase
// eslint-disable-next-line @typescript-eslint/camelcase
import { ECOS_APPClient } from "./mojo_grpc_web_pb";
import store from "@/store";
const { deploy: address } = require("../../../naive.config");
const env = process.env.VUE_APP_ENV || "development";
const url = address[env].backend;
const defaultMetadata = null;

// instantiate client
export const ECOSApp = new ECOS_APPClient(url, defaultMetadata, {
  withCredentials: true,
  "Cache-Control": "max-age=86400"
});
console.log("ECOSApp", ECOSApp);

// api response validation
// function validateResponse(data) {
//   return true
// }

const API = function({ method, reqType, reqData = null, metadata = {} }) {
  const tMetadata = {
    ...defaultMetadata,
    ...metadata,
    ...{
      authorization: store.state.token.includes("Bearer")
        ? store.state.token
        : "Bearer " + store.state.token
    }
  };
  if (env !== "production") {
    console.log(
      "%c Request ",
      "color: white; background-color: #0004A5",
      "--------------------------------------------------------------------------------------------------------"
    );
    console.log(
      "%c Method ",
      "color: white; background-color: #95B46A",
      method
    );
    console.log(
      "%c ReqData ",
      "color: white; background-color: #FFCC33",
      JSON.stringify(reqData, null, 2)
    );
  }
  // eslint-disable-next-line new-cap
  const request = new reqType(reqData);
  console.log("request", request, tMetadata);
  return new Promise((resolve, reject) => {
    ECOSApp[method](request, tMetadata, (err, res) => {
      if (err) {
        console.log("22222222222", res);
        reject(err);
      } else {
        console.log("11111111111111");
        const resData = res.toObject();
        if (env !== "production") {
          console.log(
            "%c Response ",
            "color: white; background-color: #0004A5",
            "-------------------------------------------------------------------------------------------------------"
          );
          console.log(
            "%c Response Data ",
            "color: white; background-color: #FFCC33",
            JSON.stringify(resData, null, 2)
          );
        }
        resolve({
          status: "success",
          resData
        });
      }
    });
  }).catch(err => {
    console.error("[ECOSApp error]", err);
    return {
      status: "error",
      msg: err.message || "unknown error"
    };
  });
};

export default API;
