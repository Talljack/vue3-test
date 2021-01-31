import message from "../../utils/message";
import * as ReqType from "./grpc/mojo_grpc_web_pb";
import API from "./grpc/mojo";
// ecos axios
import axios from "axios";
import store from "@/store/index.js";
import { deploy } from "../../naive.config";
// ts_rpc
import { findRpcService, RemoteObject } from "ts_rpc";
import { IsAdminRequest } from "./grpc/mojo_pb";

const env = process.env.VUE_APP_ENV || "development";
const ecosBackend = deploy[env].ecosBackend;
const tspkgBackend = deploy[env].tspkg;
// axios config
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = ecosBackend + "ecos.ECOS/";
// ts_rpc config
const location = process.env.VUE_APP_LOCAL || "bj";
const atf = findRpcService("registry-rtf", location);
const rgt = findRpcService("registry", "SD");
const tpk = RemoteObject(tspkgBackend);

const defaultConfig = {
  hideError: false,
  extraErrorMsg: "",
  customErrorMsg: "",
  duration: 3000,
  errorCb: err => {
    console.error("[ECOSApp error]", err);
  }
};

async function requestWrapper(tryFn, config = defaultConfig, type = "gRpc") {
  config = {
    ...defaultConfig,
    ...config
  };
  if (type === "axios") {
    console.log("store", store);
    if (store.state.token) {
      axios.defaults.headers.post.Authorization = store.state.token;
    }
  }
  try {
    const res = await tryFn();
    if (type === "gRpc") {
      if (res.status === "success") {
        return res.resData;
      } else {
        throw res;
      }
    } else if (type === "tsRpc") {
      if (res.error) {
        throw res.error.message;
      } else {
        return res;
      }
    } else if (type === "axios") {
      if (res.status === 200) {
        return res.data;
      } else {
        throw res.statusText;
      }
    }
  } catch (err) {
    const {
      hideError,
      extraErrorMsg,
      customErrorMsg,
      duration,
      errorCb
    } = config;
    if (!hideError) {
      if (
        customErrorMsg !== null &&
        customErrorMsg !== undefined &&
        customErrorMsg.trim() !== ""
      ) {
        message.error(customErrorMsg.trim(), { duration });
      } else {
        const msg = extraErrorMsg ? `${err.msg}, ${extraErrorMsg}` : err.msg;
        message.error(msg, { duration });
      }
    }
    errorCb(err);
  }
}

export const isAdmin = async () => {
  const result = await requestWrapper(
    async () => {
      const res = await API({
        method: "isAdmin",
        reqType: ReqType.IsAdminRequest
      });
      return res;
    },
    {
      extraErrorMsg: "failed to get admin"
    }
  );
  return result;
};
