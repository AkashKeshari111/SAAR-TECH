import React from 'react'
import styles from './Styles/Homepage.module.css'
import { Link } from 'react-router-dom'
export default function Card(props) {



  return (
    <>
    
<Link to="/products">
    
        <div className={styles.card}>

        <div className={styles.div111}>
<img  src={props.Image} alt="" />
</div>
<div className={styles.cardp}>
<p>{props.title}</p>
</div>
<button className={styles.addcart}>{props.price}</button>

</div>
</Link>
  

    </>
  )
}
