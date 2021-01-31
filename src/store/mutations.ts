import * as types from "./mutation-types";

const mutations = {
  [types.UPDATE_TOKEN](state, token) {
    state.token = token;
  },
  [types.MODIFY_ADMIN](state, admin) {
    state.isAdmin = admin;
  },
  [types.MODIFY_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default mutations;
