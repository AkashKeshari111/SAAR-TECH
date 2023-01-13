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
    .then((res)=>
{
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

const getCart2=(creds)=>async(dispatch)=>{
    try{
        dispatch({type:types.Success_Cart_Qty,payload:creds})  
        // console.log(creds); 
    }
    catch(error){
         console.log(error)
    }
        
}

const Remove = (creds) => (dispatch)=>{
    dispatch({type:types.Remove_Cart,payload:creds})
  //   console.log(creds);
  }

const PlacedOrder = (payload,navigate) => (dispatch) => {
    
    dispatch({type:types.Placed_Order,payload:payload})
    alert("Product Order Successfully!")
    navigate("/")
   
}

export {getProduct, getProductRequest,getCart2,Remove,PlacedOrder}