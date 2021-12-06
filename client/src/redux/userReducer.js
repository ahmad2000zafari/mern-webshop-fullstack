export const loginStart = () => {
  return {
    type: "LOG_IN_START",
  };
};

export const loginSuccess = (user) => {
  return {
    type: "LOG_IN_SUCCEED",
    payload: { user },
  };
};

export const loginFailure = () => {
  return {
    type: "LOG_IN_FAILURE",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_START":
      state.isFetching = true;

      return {
        ...state,
      };

    case "LOG_IN_SUCCEED":
      console.log(action.payload.user);
      state.isFetching = false;
      state.currentUser = action.payload.user;
      console.log(state);
      return {
        ...state,
      };

    case "LOG_IN_FAILURE":
      state.isFetching = false;
      state.error = true;
      return {
        ...state,
      };

    case "LOG_OUT":
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
