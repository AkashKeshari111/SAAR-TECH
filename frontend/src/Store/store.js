import {  combineReducers, legacy_createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"



const rootReducer=combineReducers({
//key -> value_Router

})



export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))