import React from 'react'
// import  '../single/Style1/Junior.css'

import "../single/Style/Addto.css"
import { Link } from 'react-router-dom';
import {useCart} from "react-use-cart"


export default function Checkout() {
  const Moved=()=>{
    alert("Your Order is Place Successfully")
    
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
  return (

    <>
  {/* navbar */}

    
    <div className='junior-nav-box1'>
    <div className='junior-nav1'>
      <h2 className='junior-h2'>
        CHECKOUT
        </h2>
    </div>
  </div>
  {/* navbar */}

  <div className='Add-main-div'>
    {/* checkout option ala div */}
    <div className='Add-items-div'>
{/* place mini div */}
      <div className='item-placeorder-payment-div'>
        <div className='item-place-order-span-div'>
          
          <h4 className='item-place-order-span'><i class="fa-solid fa-file-invoice-dollar pay-ic"></i> TOTAL PAYABLE AMOUNT</h4>
          <div>
            <h4 className='item-place-order-span'>Rs.  {Math.floor(cartTotal)}</h4>
          </div>
        </div>

        <div className='item-paymentmode-info-div'>

        <span className='item-place-order-span'><i class="fa-solid fa-credit-card pay-ic"></i> PAYMENT METHODS</span>
        </div>
      </div>
{/* place mini div */}


        <div className='payment-option'>
          <div className='checkbox-pay-div'>
            <input  type="checkbox" />
            <label className='credit' htmlFor="credit">Credit / Debit Card</label>
          </div>
          <div className='checkbox-pay-div'>
            <input  type="checkbox" />
            <label className='credit' htmlFor="credit">Net Banking</label>
          </div>
          <div className='checkbox-pay-div'>
            <input  type="checkbox" />
            <label className='credit' htmlFor="credit">Paytm Wallet</label>
          </div>
          <div className='checkbox-pay-div'>
            <input  type="checkbox" />
            <label className='credit' htmlFor="credit">Other Wallets</label>
          </div>
          <div className='checkbox-pay-div'>
            <input  type="checkbox" />
            <label className='credit' htmlFor="credit">UPI</label>
          </div>
          <div className='checkbox-pay-div'>
            <input  type="checkbox" />
            <label className='credit' htmlFor="credit">Pay on Delivery (UPI, Wallet, Card and Cash)</label>
          </div>
        </div>

{/* items mini div */}
</div>
    {/* checkout option ala div */}

    <div className='Add-payment-div'>
      
      <div className='pay-main-div'>
       
        <h3 className='overview'>Overview</h3>
        <div className='subtotal'>
          <span className='subtotal-span'>Subtotal</span>
          <span className='subtotal-span'>Rs.  {Math.floor(cartTotal)}</span>
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
        <span className='subtotal-span'>Total</span>
        <span className='subtotal-span'>Rs.  {Math.floor(cartTotal)}</span>
        </div>
       </div>
      
       <Link className='linkdin' to="/thanku">

       <button onClick={Moved} className='checkout'>
      Place Order
    </button>
    </Link>
   
      </div>
      
    </div>

    

  </>
  )
}
