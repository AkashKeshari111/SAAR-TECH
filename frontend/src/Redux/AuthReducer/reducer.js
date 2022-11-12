import * as types from './actionTypes';

const iniState = {
  isAuth: localStorage.getItem("token")?true:false,
  isLoading: false,
  isError: false,
  token: localStorage.getItem("token")|| null,
};

export const reducer = (state = iniState, action) => {
  const { type, payload } = action;
  switch (type) {

    // <---------------------------------------User cases----------------------------->

    case types.USER_LOGIN_REQUEST:
      return {
        ...iniState,
        isLoading: true,
        isError:false,
        isAuth:false,
      };

    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload )
      return {
        ...iniState,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError:false
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...iniState,
        isLoading: false,
        isAuth: false,
        isError:true,
        token: "",
      };
    // <---------------------------------------Admin cases----------------------------->


    case types.ADMIN_LOGIN_REQUEST:
      return {
        ...iniState,
        isLoading: true,
        isError:false,
        isAuth:false,
      };

    case types.ADMIN_LOGIN_SUCCESS:
      localStorage.setItem("token", payload )
      return {
        ...iniState,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError:false
      };

    case types.ADMIN_LOGIN_FAILURE:
      return {
        ...iniState,
        isLoading: false,
        isAuth: false,
        isError:true,
        token: "",
      };
    default:
      return state;
  }
}