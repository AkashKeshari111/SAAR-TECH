import * as types from './actionTypes'
import axios from 'axios'



const userLogin = (payload)=> dispatch=>{

    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("http://localhost:8080/auth/login", payload)
    .then((r)=>{

   return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data})
    
    })
    .catch((err)=>{
      dispatch({type:types.USER_LOGIN_FAILURE,payload:err})
    })
  }

  const adminLogin = (payload)=> dispatch=>{

    dispatch({type:types.ADMIN_LOGIN_REQUEST})
    return axios.post("http://localhost:8080/auth/admin/login", payload)
    .then((r)=>{

   return dispatch({type:types.ADMIN_LOGIN_SUCCESS, payload:r.data})
    
    })
    .catch((err)=>{
      dispatch({type:types.ADMIN_LOGIN_FAILURE,payload:err})
    })
  }


  export {userLogin,  adminLogin}
 