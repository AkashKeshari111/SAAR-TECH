import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, Placed_Order, Remove_Cart, Success_Cart_Qty } from "./actionTypes";


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    cart_data:JSON.parse(localStorage.getItem("cart"))||[],
    placeOrder:JSON.parse(localStorage.getItem("placeorder"))||[],
  };



  export const reducer = (oldState = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
    
      case GET_PRODUCTS_REQUEST:
        return {
          ...oldState,
          isLoading: true,
        }
    
        case GET_PRODUCTS_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          products: payload,
        }
    
        case GET_PRODUCTS_FAILURE:
        return {
          ...oldState,
          isLoading: false,
          isError: true,
        }
    
        // case DELETE_PRODUCT_REQUEST:
        // return {
        //   ...oldState,
        //   isLoading: true,
        // }
    
        // case DELETE_PRODUCT_SUCCESS:
        // return {
        //   ...oldState,
        //   isLoading: false,
        //   products: payload,
        // }
    
        // case DELETE_PRODUCT_FAILURE:
        // return {
        //   ...oldState,
        //   isLoading: false,
        //   isError: true,
        // }
    
    
        // case ADD_PRODUCT_REQUEST:
        // return {
        //   ...oldState,
        //   isLoading: true,
        // }
    
        // case ADD_PRODUCT_SUCCESS:
        // return {
        //   ...oldState,
        //   isLoading: false,
        //   products: payload,
        // }
    
        // case ADD_PRODUCT_FAILURE:
        // return {
        //   ...oldState,
        //   isLoading: false,
        //   isError: true,
        // }

        case Success_Cart_Qty:{
          localStorage.setItem("cart",JSON.stringify(payload))
          return {...oldState,isLoading:false,isError:false,cart_data:payload}
        
      }

      case Remove_Cart:{
        localStorage.setItem("cart",JSON.stringify(payload))
        return {...oldState,isLoading:false,isError:false,cart_data:[...payload]}
    }

    case Placed_Order:{
      localStorage.setItem("placeorder",JSON.stringify(payload))
      localStorage.removeItem("cart")
      return {...oldState,isLoading:false,isError:false,placeOrder:[...payload]}
    }
    
    
    
    
      default:
        return oldState
    }
    
    
    };