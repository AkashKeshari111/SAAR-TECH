import React from 'react'
import { useSelector } from 'react-redux';

function PlaceOrder() {
    const data = useSelector((store) => store.AppReducer.placeOrder);


   
    
 

  return (
    <div >
    {
        data?.map((el) => 
            <div>{el.title}</div>
        )
    }
    </div>
  )
}

export default PlaceOrder;
