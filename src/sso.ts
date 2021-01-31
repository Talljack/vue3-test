import { deploy } from "../naive.config";
import { SSOOption } from "./types/ssoType";
const env = process.env.VUE_APP_ENV || "development";

const authUserApi = ssoBackend => {
  return fetch(`${ssoBackend}/jsonrpc/get_current_user`, {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({ params: [] }),
    credentials: "include"
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        return Promise.reject(res.error.message);
      }
      return res;
    });
};
export const authUser = async (options: SSOOption = {}) => {
  const {
    sso = deploy[env].sso,
    ssoBackend = deploy[env].ssoBackend,
    useRedirect = true
  } = options;
  let { redirect = "" } = options;
  if (!redirect) {
    redirect = window.location.href;
  }
  try {
    const res = await authUserApi(ssoBackend);
    return res;
  } catch (error) {
    console.error("error", error);
    if (useRedirect) {
      window.location.href = `${sso}?redirect=${redirect}`;
    }
    throw error;
  }
};
