import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../AdminStyles/AdminAddProducts.module.css';
import AdminNavbar from './AdminNavbar';

export const AdminAddProducts = () => {

    const navigate = useNavigate();


    const token = localStorage.get("token")
    

    const [form,setForm] = useState({});

    const postChange = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const postYourData=(e)=>{
        e.preventDefault()
        const payload = {
            product_img:form.product_img,
            product_name:form.product_name,
            product_category:form.product_category,
            product_title:form.product_title,
            product_brand:form.product_brand,
            product_year:form.product_year,
            product_price:form.product_price,
            product_rating:form.product_rating,
            product_discount:form.product_discount,
            product_width:form.product_width,
            product_width_unit:form.product_width_unit,
            product_height:form.product_height,
            product_height_unit:form.product_height_unit,
            product_qty:form.product_qty,
            product_description:form.product_description
          
    }
        fetch("http://localhost:8080/admin/product",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                "token":`Bearer ${token}`

            },
            body:JSON.stringify(payload)
        }).then(res=>res.json()).then((res)=>{
            console.log(res)
            navigate("/adminproducts")
            // getYourData()
        })
    }

    
  return (
    <>
    <AdminNavbar/>
    <div className={styles.mainDiv}>
        <p>Add Your Products</p>
        <div className={styles.formDiv} >
            <form onSubmit={postYourData}>
            <div>
                <label>Title : </label>
                <input placeholder='Enter Product Title' type='text' name="product_title" value={form.product_title} onChange={postChange}  />
            </div>
                
            <div>
                <label>Name : </label>
                <input placeholder='Enter Product Name' type='text' name="product_name" value={form.product_name} onChange={postChange}  />
            </div>
                
            <div>
                <label>Price : </label>
                <input placeholder='Enter Your Price' type='number' name="product_price" value={form.product_price} onChange={postChange} />
            </div>
                
            <div>
                <label>Description : </label>
                <input placeholder='Enter some Description' type='text' name="product_description" value={form.product_description} onChange={postChange} />
            </div>
                
            <div>
                <label>Image : </label>
                <input placeholder='Image URL' type='text' name="product_img" value={form.product_img} onChange={postChange} />
            </div>
                
            <div>
                <label>Category : </label>
                <input placeholder='Enter Category'  type='text' name="product_category" value={form.product_category} onChange={postChange}  />
            </div>
                
            <div>
                <label>Brand : </label>
                <input placeholder='Enter Product Title' type='text' name="product_brand" value={form.product_brand} onChange={postChange}  />
            </div>
                
            <div>
                <label>Year : </label>
                <input placeholder='Enter Product Title' type='text' name="product_year" value={form.product_year} onChange={postChange}  />
            </div>
                
            <div>
                <label>Rating : </label>
                <input placeholder='Enter Product Title' type='number' name="product_rating" value={form.product_rating} onChange={postChange}  />
            </div>
                
            <div>
                <label>Discount : </label>
                <input placeholder='Enter Product Title' type='number' name="product_discount" value={form.product_discount} onChange={postChange}  />
            </div>
                
            <div>
                <label>Width : </label>
                <input placeholder='Enter Product Title' type='number' name="product_width" value={form.product_width} onChange={postChange}  />
            </div>
                
            <div>
                <label>Width Unit : </label>
                <input placeholder='Enter Product Title' type='text' name="product_width_unit" value={form.product_width_unit} onChange={postChange}  />
            </div>
                
            <div>
                <label>Height : </label>
                <input placeholder='Enter Product Title' type='number' name="product_height" value={form.product_height} onChange={postChange}  />
            </div>
                
            <div>
                <label>Height Unit : </label>
                <input placeholder='Enter Product Title' type='text' name="product_height_unit" value={form.product_height_unit} onChange={postChange}  />
            </div>
                
            <div>
                <label>Quantity : </label>
                <input placeholder='Enter Product Title' type='number' name="product_qty" value={form.product_qty} onChange={postChange}  />
            </div>
                

         
            <div className={styles.mainBtn} >
                <button type="submit" className={styles.btn}>Save</button>
            </div>
            </form>
        </div>
    </div>
    </>
  )
}
