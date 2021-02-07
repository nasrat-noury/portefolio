const initialState = {
  connected: false,
  data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_IS_CONNECTED":
      return { ...state, connected: action.value };
    case "UPDATE_IS_DECONNECTED":
      return { ...state, data: {} };
    case "UPDATE_DATA":
      return { ...state, data: action.newValue };
    default:
      return state;
  }
};

export default userReducer;
