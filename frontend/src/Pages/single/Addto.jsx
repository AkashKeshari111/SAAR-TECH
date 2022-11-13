import React from 'react'
import {useCart} from "react-use-cart"
import  "./Style/Addto.css"
import { Link } from 'react-router-dom';
import  "./Style1/Junior.css"
export default function Addto() {
  const Moved=()=>{
    alert("Go to Payment Page")
  }
  const{
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  }=useCart();
      
       if(isEmpty) return <> 
      
 
   <div className="empty-cart">
    <img className="empty-img" src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" alt="" />
    
    </div>
    </>

    
  return (
    <>
      
      <div className='junior-nav-box1'>
      <div className='junior-nav1'>
        <h2 className='junior-h2'>
          MY BAG ({totalItems})
          </h2>
      </div>
    </div>
    <div className='Add-main-div'>
      <div className='Add-items-div'>
{/* items mini div */}
  {items.map((e)=>{
    return(
    <div className='item-addtocart'>
             <div className='item-addtocart-img-div'>
             <img className='item-addtocart-img' src={e.image} alt="error" />
             </div>
             <div className='item-addtocart-info'>
               <p className='Addtocart-title'>{e.title}</p>
              
             <p className='Addtocart-color'>Color - Python<br/>Size - One Size</p>
             <button onClick={()=>removeItem(e.id)} className='remove-item-cart'>Remove</button>
             </div>
             <div className='Addtocart-q'>
              <button className='minus-q'
              onClick={()=>updateItemQuantity(e.id,e.quantity -1)}>-</button>
               QTY({e.quantity})
               <button className='plus-q'
               onClick={()=>updateItemQuantity(e.id, e.quantity +1)}>+</button>
             </div>
             
             <div className='cart-total-amount-div'>
               <p className='cart-total-amount'>
               Rs. {e.price*e.quantity}
               </p>
              </div>
        </div>)
  })}
            
{/* items mini div */}
</div>

      <div className='Add-payment-div'>
        
       
        
  
      <div className='pay-main-div'>
          <h3 className='overview'>Overview</h3>
          <div className='subtotal'>
            <span className='subtotal-span'>Subtotal</span>
            <span className='subtotal-span'>Rs. {Math.floor(cartTotal)}</span>
          </div>
          <div  className='subtotal'>
          <span className='subtotal-span charges'>Discount</span>
          <span className='subtotal-span charges'>-Rs. 0</span>
        </div>
            
          <div  className='subtotal'>
          <span className='subtotal-span'>GST</span>
          <span className='subtotal-span'>Rs. 0</span>
          </div>
          <div  className='subtotal'>
          <span className='subtotal-span'>Delivery Charges</span>
          <span className='subtotal-span'>Rs. 0</span>
          </div>
          <div  className='subtotal-total'>
          <span className='subtotal-span'>Total:</span>
          <span className='subtotal-span'>Rs.  {Math.floor(cartTotal)}</span>
          </div>
         </div>


        
      <Link className='linkdin' to="/checkout">
      <button onClick={Moved} className='checkout'>
        checkout
      </button>
      </Link>
      <Link className='linkdin' to="/">

      <button className='checkout2'>
        shoping more
      </button>
      </Link>

        </div>
        
      </div>

      
  
    </>
  )
}
