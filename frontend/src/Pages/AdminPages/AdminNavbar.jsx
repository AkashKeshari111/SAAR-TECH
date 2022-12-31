import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../AdminStyles/AdminNavbar.module.css';
import image from "../assets/saar.png"

const AdminNavbar = () => {
  const name=useSelector((state)=>state.AuthReducer.name)
  return (
    <div className={styles.box} >
        <div className={styles.mainDiv} >
                    <div className={styles.logoImg}>
                 <Link to="/"><img src={image} alt='' /></Link>   
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
                    Admin:{name}
                    </div>
                    
        </div>
    </div>
  )
}

export default AdminNavbar;
