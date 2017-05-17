/**
 * Created by oren on 17/05/2017.
 */
import InitialState from "./authInitialState";

const {
  LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_CHECKED,

  LOGOUT,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = require("../actionTypes").default;

const initialState = new InitialState();

export default function authReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set("authProvider", action.data.authProvider);
    case LOGOUT_REQUEST:
      state.set("authProvider", action.data.authProvider);
      setTimeout(() => {
        console.log(`REDUCER STATE - ${JSON.stringify(state, null, 2)}`);
      },1000);
      return state;
    default:
      return state;
  }
}