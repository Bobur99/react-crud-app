import { ADD_USER, LOGIN, LOGOUT, SET_CURRENT_USER } from "./userType";

const initialUserState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  token: JSON.parse(localStorage.getItem("token")) || false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER: {
      const updatedUsers = [...state.users, payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return (state = {
        ...state,
        users: updatedUsers,
      });
    }

    case SET_CURRENT_USER: {
      localStorage.setItem("currentUser", JSON.stringify(payload));
      return (state = {
        ...state,
        currentUser: payload,
      });
    }

    case LOGIN: {
      localStorage.setItem("token", JSON.stringify(true));
      return (state = {
        ...state,
        token: true,
      });
    }

    case LOGOUT: {
      localStorage.setItem("token", JSON.stringify(false));
      localStorage.setItem("currentUser", JSON.stringify(null));
      return (state = {
        ...state,
        currentUser: null,
        token: false,
      });
    }

    default:
      return state;
  }
};

export { userReducer, initialUserState };
