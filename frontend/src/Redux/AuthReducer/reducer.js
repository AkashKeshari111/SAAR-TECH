import * as types from './actionTypes';

const iniState = {
  isAuth: localStorage.getItem("token")?true:false,
  isLoading: false,
  isError: false,
  token: localStorage.getItem("token")|| null,
  role:localStorage.getItem("role")|| null,
  name:localStorage.getItem("name")|| null,
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
      localStorage.setItem("token", payload.token )
      localStorage.setItem("name", payload.name )
      localStorage.setItem("role", payload.role )

      return {
        ...iniState,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        isError:false,
        role:payload.role,
        name:payload.name
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
    
      localStorage.setItem("token", payload.token )
      localStorage.setItem("name", payload.name )
      localStorage.setItem("role", payload.role )
      return {
        ...iniState,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        isError:false,
        role:payload.role,
        name:payload.name
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