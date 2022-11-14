import React from 'react'
import { useState } from 'react'
import styles from "./Styles/Homepage.module.css"
import Card from './card'
import Cardsec from './card1'
import Cardthird from './card2'
import {Link} from "react-router-dom"
import{data} from "./data"
import{datathird} from "./data1"
import{rahul} from "./data2"
import image from "./image/Capture5.PNG"
import image1 from "./image1/Capture6.PNG"
import image2 from "./image2/Capture7.PNG"
import NavbarCarousel from '../../Components/Navbar/NavbarCarousel'

const HomePage = () => {
  const[sman,setsman]=useState(data)
  const[smanthird,setsmanthird]=useState(datathird)
  const[smanp,setsmanp]=useState(rahul)

  return (
    <>
     <div className={styles.megaDropdownBox}>
        <NavbarCarousel></NavbarCarousel>
      </div>
    <div className={styles.maincontainer}>
      {/* firs images start */}
      <div className={styles.fdiv}>
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
          
      {/* card button  start*/}
      <div className={styles.maincollection}>

      
      <div className={styles.collection}>
    <h2>
    <i class="fa-solid fa-bag-shopping"></i>
<span>COLLECTION</span>
    </h2>
  </div>
  <div className={styles.maincard}>
  <div className={styles.image1}>
  <img src={image} alt="omnifood" />
  </div>
  <div className={styles.gridcard}>
  {sman.map((e,index)=>{
    return( 
    <Card key={index} e={e} Image={e.Image} title={e.title}  price={e.price} />)
   })}
   </div>
    </div>
    </div>
    {/* Card button end */}

    {/* Card1 button  start*/}
    <div className={styles.maincollection}>

    <div className={styles.collection}>
    <h2>
    <i class="fa-solid fa-book-tanakh"></i>
<span>SUPER DEALS</span>
    </h2>
  </div>
  <div className={styles.maincard}>
  <div className={styles.image1}>
  <img src={image1} alt="omnifood" />
  </div>
  <div className={styles.gridbaa}>

  
    <div className={styles.gridcard1}>

  {smanp.map((e,index)=>{
    return( 
    <Cardsec key={index} e={e} image={e.image} title={e.title}  price={e.price} />)
   })}
   </div> 
   </div>
    </div>
    </div> 
    {/* card1 button end */}

    {/* Card1 button  start*/}
    <div className={styles.maincollection}>

    <div className={styles.collection}>
    <h2>
    <i class="fa-solid fa-star"></i>
<span>NEW</span>
    </h2>
  </div>
  <div className={styles.maincard}>
  <div className={styles.image1}>
  <img src={image2} alt="omnifood" />
  </div>
  <div>
 <Link to="/products">
  <div className={styles.gridcard2}>

  {smanthird.map((e,index)=>{
    return( 
    <Cardthird key={index} e={e} Image={e.Image}   price={e.price} />)
   })}
   </div>
   </Link>
   </div>
    </div>
    </div>
    {/* card1 button end */}
    </div>
    </>
  )
}

export default HomePage