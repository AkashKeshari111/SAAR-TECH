import React, { useEffect, useState } from 'react'
import styles from '../AdminStyles/AdminProducts.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';


export const AdminProducts = () => {
    const [data,setData] = useState();

    const getYourData=()=>{
        axios.get("http://localhost:8080/admin/product",{
            headers:{
                "token":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZlMDJiYjIyZWE2MTYxZjEwNGU2OWMiLCJpYXQiOjE2NjgxNjg4NDMsImV4cCI6MTY2ODI1NTI0M30.wfsuWpsfSqoB0gDeZBLA5KzR1PNAdK48LEDjH8aFRPM`
            }
        }).then(res=>{
            setData(res.data.data)
            console.log(res.data.data)
        })
}
    useEffect(()=>{
        getYourData()
    },[])
  return (
    <div className={styles.box} >
    <div className={styles.filterBox} >
        <div>
            <p><strong>Sort by Title:</strong></p>
            <select>
                <option>A-Z</option>
                <option>Z-A</option>
            </select>
        </div>
        <div>
            <p><strong>Sort by Price:</strong></p>
            <select>
                <option>Low-High</option>
                <option>High-Low</option>
            </select>
        </div>
    </div>
            <div className={styles.mainDiv} >
            {
                data?.map(prod=>
                    <div className={styles.product} >
                        <div className={styles.prodImg} ><img src={prod.img} alt='' /></div>
                        <div className={styles.prodTitle}><strong>Title :</strong>{prod.product_name}</div>
                        <div className={styles.prodPrice}><strong>Price :</strong>{prod.product_price}</div>
                        <div className={styles.prodTime}><strong>Updated Time :</strong>{prod.updatedAt}</div>
                        <div className={styles.prodButton}>
                            <Link to={`/adminedit/${prod._id}`}>
                                <button className={styles.btn}>Edit</button>
                            </Link>
                            <button className={styles.btn}>Delete</button>
                        </div>
                    </div>
                    )
            }
            </div>
    </div>
    
    
  )
}
