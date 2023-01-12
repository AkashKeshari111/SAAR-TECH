import React from 'react'
import  "./Style1/Junior.css";
import styles from "./Style/Addto.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getCart2, PlacedOrder, Remove } from '../../Redux/AppReducer/action';
import {BsFillTrashFill , BsFillCaretDownFill , BsFillBagPlusFill} from "react-icons/bs"




export default function Addto() {
  
  

  const data = useSelector((store) => store.AppReducer.cart_data);
  console.log(data)

  const dispatch = useDispatch();
  const token = useSelector((state)=>state.AuthReducer.token)

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
    dispatch(PlacedOrder([...data]))
    
  }

    if(data.length==0 || data.length == undefined) 
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
              
              data?.reverse().map((ele) =>
              <div className={styles.productBox} >
                <div className={styles.prodImg} >
                  <img src={ele.image} />
                </div>
                <div className={styles.prodTitle} >
                  <p>Title : {ele.title}</p>
                </div>
                <div className={styles.prodPrice} >
                  <p>Price : ₹{ele.price}</p>
                </div>
                <div className={styles.incBtn} >
                  <div className={styles.btn1} >
                    <div><button onClick={()=>handleQty(ele.id,-1)} >-</button></div>
                    <p>{ele.qty}</p>
                    <div><button onClick={()=>handleQty(ele.id,1)} >+</button></div>
                  </div>
                  <div>
                    <button onClick={() => deleteBtn(ele.id)} > <BsFillTrashFill style={{color:"red",fontSize:"25px",marginTop:"12px"}} /> </button>
                  </div>
                </div>
                
              </div>

                
              )
            }
            
          </div>
      <div className={styles.box2} >
        <div className={styles.innerBox1} >
            
            <p className={styles.estimate} >Estimate shipping & tax</p>
            <div className={styles.checkBox} >
              <input type='checkbox'  />
              <p>NYC SuperStore Pickup</p>

            </div>
            <div className={styles.country} >
              <p>United State</p>
              <BsFillCaretDownFill/>
            </div>
        </div>
        <div className={styles.innerBox2} >
          <div>
              <p>Actual Price:</p>
              <p>{ActualPrice}</p>
          </div>
          <div>
            <p>Discount Price:</p>
            <p>{TotalDiscount}</p>
          </div>
          <div className={styles.totalPrice} >
            <p>Total Price:</p>
            <p>{TotalPrice}</p>
          </div>
        
          <div className={styles.checkout} >
              <BsFillBagPlusFill/>
              <p>Begin Checkout</p>
          </div>
        </div>
      </div>
      
    </div>
        
      </>
    }
}
