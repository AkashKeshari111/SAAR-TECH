import React from 'react'
import './Homepage.css'
import Card from './card'
const HomePage = () => {
  return (
    <div className='main-home-container'>
      {/* firs images start */}
      <div className='f-div'>
        <div>
          <img src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg" alt="" />
        </div>
        <div>
          <img src="https://uidesign.gbtcdn.com/GB/image/8823/T14_230X120_en.jpg" alt="" />
        </div>
        <div>
          <img src="https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg" alt="" />
        </div>
        <div>
          <img src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg" alt="" />
        </div>
        <div>
          <img src="https://uidesign.gbtcdn.com/GB/image/6080/230x120.jpg?imbypass=true" alt="" />
        </div>
        </div>
       {/* firs images end */}
          
      {/* items button  start*/}
      <div className='items-1'>
      <Card/>
      </div>
      

    {/* items button end */}
    </div>
  )
}

export default HomePage