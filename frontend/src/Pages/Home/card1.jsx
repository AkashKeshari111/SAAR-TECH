import React from 'react'
import styles from './Styles/Homepage.module.css'
import {Link} from "react-router-dom"
export default function Cardsec(props) {



  return (
    <>
        {/* <div className={styles.card}>

<div>
<img src={props.Image} alt="" />
</div>
<div className={styles.cardp}>
<p>{props.title}</p>
</div>
<button className={styles.addcart}>{props.price}</button>

</div> */}
<Link to="/products">

<div className={styles.card}>
   <div className={styles.div112}>
   <img className={styles.imagecard} src={props.image} alt="" width="100%" height={"100%"}/>
   </div>
      <div>
      <h3 className={styles.cardp}>{props.title}</h3>
      </div>
     <div>
     <h2  className={styles.addp} style={{color:" #f30240",fontSize:"larger",fontWeight:"500"}}>{props.price}</h2>
     </div>
     
      <div>
        
        {/* <button onClick={()=>handleIcon()}>

        <img className={styles.heartcard} style={{width:"27px"}} src={icon} alt="heart icon" />
        </button> */}
      </div>
    </div>
    </Link>
  

    </>
  )
}
