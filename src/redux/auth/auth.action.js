/**
 * Created by oren on 17/05/2017.
 */

const {
  LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_CHECKED,
  LOGOUT,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE

} = require("../actionTypes").default;

export function login(data, socialData) {
  console.log(`ACTION LOGIN - ${JSON.stringify(data, null, 2)}`);
  return {
    type: LOGIN_REQUEST,
    data
  };

}

export function logout(data) {
  console.log(`ACTION LOGOUT - ${JSON.stringify(data, null, 2)}`);

  return {
    type: LOGOUT_REQUEST,
    data
  };

}