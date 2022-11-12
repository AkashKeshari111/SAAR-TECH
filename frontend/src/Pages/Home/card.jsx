import React from 'react'
import styles from './Styles/Homepage.module.css'
export default function Card(props) {



  return (
    <>
    

    
        <div className={styles.card}>

<div>
<img src={props.Image} alt="" />
</div>
<div className={styles.cardp}>
<p>{props.title}</p>
</div>
<button className={styles.addcart}>{props.price}</button>

</div>

  

    </>
  )
}
