import * as types from './actionTypes';

const iniState = {
  isAuth: localStorage.getItem("token")?true:false,
  isLoading: false,
  isError: false,
  token: localStorage.getItem("token")|| "",
  role:localStorage.getItem("role")|| "",
  name:localStorage.getItem("name")|| "",
  userId:localStorage.getItem("userId")|| "",

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
      localStorage.setItem("userId", payload.userId )


      return {
        ...iniState,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        isError:false,
        role:payload.role,
        name:payload.name,
        userId:payload.userId

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
      localStorage.setItem("userId", payload.userId )

      return {
        ...iniState,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        isError:false,
        role:payload.role,
        name:payload.name,
        userId:payload.userId
      };

    case types.ADMIN_LOGIN_FAILURE:
      return {
        ...iniState,
        isLoading: false,
        isAuth: false,
        isError:true,
        token: "",
      };


      case types.LOGOUT:
        localStorage.setItem("token", "" )
        localStorage.setItem("name", "")
        localStorage.setItem("role", "")
        localStorage.setItem("userId", "" )
  
        return {
          ...iniState,
          isLoading: false,
          token: "",
          isAuth: true,
          isError:false,
          role:"",
          name:""
        };

    default:
      return state;
  }
}