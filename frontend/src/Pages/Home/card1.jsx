import React from 'react'
import styles from './Styles/Homepage.module.css'

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
<div className={styles.card}>
      <img className={styles.imagecard} src={props.image} alt="" />
      <h3 className={styles.cardp}>{props.title}</h3>
      <h2  className={styles.addp} style={{color:" #f30240",fontSize:"larger",fontWeight:"500"}}>{props.price}</h2>
      <div>
        
        {/* <button onClick={()=>handleIcon()}>

        <img className={styles.heartcard} style={{width:"27px"}} src={icon} alt="heart icon" />
        </button> */}
      </div>
    </div>
    
  

    </>
  )
}
