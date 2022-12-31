import React from 'react'
import { Link } from 'react-router-dom';
import "./Thanku.css"
export default function Thanku() {
  const Moved=()=>{
    alert("Thank you For Shoping")
  }
  return (
    <>
    
      <div className='junior-nav-box1'>
      <div className='junior-nav2'>
        <h2 className='junior-h2'>
          ORDER PLACED
          </h2>
      </div>
    </div>

    <div className='Thanku-div'>
      <div className='Thanku-img'>

        <h1>Thank You For Shoping</h1>
       <Link className='linkdin' to="/">

        <button onClick={Moved} className='checkout6'>Continue Shoping</button>
<i className="fa-solid fa-xmark X"></i>
</Link>

      </div>
    </div>
    </>
  )
}
