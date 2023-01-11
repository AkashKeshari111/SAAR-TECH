import React from 'react'
import  "./Style1/Junior.css";
import styles from "./Style/Addto.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getCart2, Remove } from '../../Redux/AppReducer/action';


const array = JSON.parse(localStorage.getItem("cart")) || []

export default function Addto() {
  
  console.log(array.length,"sad")

  const data = useSelector((store) => store.AppReducer.cart_data);
  console.log(data)

  const dispatch = useDispatch();

  const TotalPrice = data.reduce((acc, el)=>{
    return acc + ((el.qty * el.price) - ((el.qty*el.price*el.discount)/100))
  }, 0) 

  const TotalDiscount = data.reduce((acc, el)=>{
    return acc + ((el.qty*el.price*el.discount)/100)
  }, 0) 

  const ActualPrice = data.reduce((acc, el)=>{
    return acc + ((el.qty * el.price))
  }, 0) 


  

  const handleQty = (id,value) => {
    const quantity = data.map((el)=>{
        if(el.id==id){
          return  {...el,
              qty: el.qty + value
            } 
          
        }else{
          return el
        }
      
      })
     dispatch(getCart2(quantity))
      
  };

  const deleteBtn = (id) => {
    data.splice(id, 1);
    dispatch(Remove(data));
  }

  const handlePlaceOrder = () => {
    
  }

    if(array.length==0 || array.length == undefined) 
    {
      return <> 
    <div className={styles.empty_cart}>
      <img className="empty-img" src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" alt="" />
    </div>
    </>

    }
    else
    {
      return <>
      <div className={styles.mainBox} >
            <div className={styles.box1} >
            {
              
              data?.map((ele) =>
              <div className={styles.productBox} >
                <div>
                  <img src={ele.image} />
                </div>
                <div>
                  <h1>{ele.title}</h1>
                </div>
                <div>
                  <p>{ele.price}</p>
                </div>
                <div className={styles.incBtn} >
                  <div className={styles.btn1} >
                    <button onClick={()=>handleQty(ele.id,-1)} >-</button>
                    <p>{ele.qty}</p>
                    <button onClick={()=>handleQty(ele.id,1)} >+</button>
                  </div>
                  <div>
                    <button onClick={() => deleteBtn(ele.id)} >DELETE</button>
                  </div>
                </div>
                
              </div>

                
              )
            }
            
          </div>
      <div className={styles.box2} >
        <h1>Discount Price : {TotalDiscount}</h1>
        <h1>Actual Price : {ActualPrice}</h1>
        <h1>Total Price : {TotalPrice}</h1>
      </div>
      <div>
            <button onClick={handlePlaceOrder} >Placed Order</button>
      </div>
    </div>
        
      </>
    }
}
