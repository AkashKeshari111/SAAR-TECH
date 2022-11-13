import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../AdminStyles/AdminNavbar.module.css';
import image from "../assets/saar.png"

const AdminNavbar = () => {
  var x = localStorage.getItem("name");
  console.log(x,"ssss")
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
                    <div className={styles.adminName}>
                    Admin:{" "}"Sahil Kumar"
                    </div>
                    
        </div>
    </div>
  )
}

export default AdminNavbar;
