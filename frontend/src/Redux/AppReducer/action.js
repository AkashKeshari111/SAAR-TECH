import axios from "axios";

import * as types from "./actionTypes"


const getProductRequest =()=>{
    return{

        type: types.GET_PRODUCTS_REQUEST,
    }
}



const getProduct = (queryParams) =>(dispatch) =>{
    dispatch(getProductRequest());
    return axios.get(`https://saartech-production.up.railway.app/admin/allproducts`,queryParams)
    .then((res)=>{
        dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: res.data.data,
        });
        console.log(res.data.data)
    })
    .catch((err)=>{
        dispatch({
            type: types.GET_PRODUCTS_FAILURE,
        })
        console.log(err)
    })
}
export {getProduct, getProductRequest}