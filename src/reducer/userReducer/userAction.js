import { ADD_USER, LOGIN, LOGOUT, SET_CURRENT_USER } from "./userType";

const addUserAction = (payload) => ({
  type: ADD_USER,
  payload,
});

const setCurrentUserAction = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

const loginAction = () => ({
  type: LOGIN
});

const logoutAction = () => ({
  type: LOGOUT
});

export { addUserAction, setCurrentUserAction, loginAction, logoutAction };
