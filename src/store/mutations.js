import {userTokenStorageKey} from '$config'
import * as TYPES from "./mutations-types";

export default {
  // 设置 token
  [TYPES.SET_TOKEN](state, value){
    state.token =  value
  },

  [TYPES.SET_USER](state, value){
    state.user = value
  },

  SET_LOAD_STATUS(state, status) {
    state.isLoading = status;
  },

  // 设置注册步骤
  SET_SIGN_UP_SETP(state, step){
    state.signUpStep = step;
  }
}





