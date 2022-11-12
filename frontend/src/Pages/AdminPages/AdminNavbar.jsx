import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../AdminStyles/Navbar.module.css';
import image from "../assets/saar.png"

const Navbar = () => {
  return (
    <div className={styles.box} >
        <div className={styles.mainDiv} >
                    <div className={styles.logoImg}>
                    <img src={image} alt='' />
                    </div>
                    <Link to='/adminproducts' >
                        <div className={styles.allProducts} >
                        All Products
                        </div>
                    </Link>
                    <Link to='/adminaddproducts'>
                        <div className={styles.addProducts} >
                        Add Products
                        </div>
                    </Link>

                    <p>Admin:{" "}"Sahil Kumar"</p>
        </div>
    </div>
  )
}

export default Navbar;
