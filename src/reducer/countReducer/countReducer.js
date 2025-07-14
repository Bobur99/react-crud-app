export const initialState = 1
export const countReducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return state + (action.payload || 1);
    case "MINUS":
      return state - (action.payload || 1);
    case "TIMES":
      return state * (action.payload || 1);
    case "DIVIDED_BY":
      return state / (action.payload || 1);

    default:
      return state;
  }
};
