export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export const initialState = {
  token: localStorage.getItem("token"),
};
