import React from 'react'
import styles from './Styles/Homepage.module.css'
import {Link} from "react-router-dom"
export default function Cardthird(props) {



  return (
    <>
    <Link to="/products">
    
        <div className={styles.card}>

<div>
<img src={props.Image} alt="" />
</div>
<div className={styles.cardp}>
<p>{props.title}</p>
</div>
<p className={styles.addp}>{props.price}</p>

</div>
    
</Link>

    </>
  )
}
