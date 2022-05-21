/* eslint-disable default-case */
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove token after developing
  token:
    "BQBqT5UTJbH7P6w9R9_hwNGjnV1snkaw2WUd42ZH8-Y_m_deov…tLKO1a4r69xr6tL_p6Ox4lO_svdiryDC1q8-rd1YnI5sSZaCb",
};

const reducer = (state, action) => {
  // PRO TIP: check action

  //Action -> type, [payload]
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
