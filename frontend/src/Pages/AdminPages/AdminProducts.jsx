import React, { useEffect, useState } from 'react'
import styles from '../AdminStyles/AdminProducts.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import AdminNavbar from './AdminNavbar';
import { useSelector } from 'react-redux';


export const AdminProducts = () => {

    const [data,setData] = useState();

    const [filterData,setFilterData] = useState();

    const [page,setPage] = useState(1);
    const [order,setOrder] = useState("asc");
    const [sortBy,setSortBy] = useState("product_price");
    const [limit,setLimit] = useState(12);
    const [total,setTotal]=useState();

   const token=useSelector((state)=>state.AuthReducer.token)

    // const token = localStorage.get("token")





    const getYourData=({page,limit,sortBy,order})=>{

       axios.get(`https://saartech-production.up.railway.app/admin/product?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`,{
            
            headers:{

                "token":`Bearer ${token}`

            }
        })
        .then(res=>{
            setData(res.data.data)
            // console.log("sahil",res.data.totalPages)
            setTotal(res.data.totalPages)
    
        })
        .catch((err) => {
            console.log(err)
        })
}
    

    const deleteItem = (id,page,limit,sortBy,order) => {
        
        console.log(id)
        axios.delete(`https://saartech-production.up.railway.app/admin/product/${id}`,{
            headers:{
                "token":`Bearer ${token}`
            }
        })
        .then((res) => {
            getYourData({page,limit,sortBy,order})
            console.log(res,"akash")
        })
        .catch(err => {
            console.log(err)
        })

    }

    const handleChange=(e)=>{
        
        setOrder(e.target.value)
        // setSortBy(order==="asc"?1:-1)
        
        console.log(e.target.value)
      }


    const handlePageChange = (value) => {
        setPage(value);
     };

    //  const handleFilter = (e) => {
    //     console.log(e.target.value);

    //     const filter = data.filter((el) => el.product_name == e.target.value)
    //     setFilterData(filter);

    //  }
 
    useEffect(()=>{
            
        getYourData({page,limit,sortBy,order})
        
    },[page,limit,sortBy,order])


  return (
    <>
    <AdminNavbar />
    <div className={styles.box} >
    <div className={styles.filterBox} >
        <div>
            <p><strong>Sort by Price:</strong></p>
            <select onChange={handleChange}>
                <option value="asc" >Low-High</option>
                <option value="desc" >High-Low</option>
            </select>
        </div>
    </div>
        <div>
            <div className={styles.mainDiv} >
            {
                data?.map(prod=>
                    <div key={prod._id} className={styles.product} >
                        <div className={styles.prodImg} ><img src={prod.product_img} alt='' /></div>
                        <div className={styles.prodName} >
                            <div className={styles.prodTitle}><strong>Product Name :</strong>{prod.product_name}</div>
                            <div className={styles.prodPrice}><strong>Price :</strong> ₹{prod.product_price}</div>
                        </div>
                        <div className={styles.time2} >
                            <div className={styles.prodTime}><strong>Updated Time :</strong>{prod.updatedAt.substring(11,19)}</div>
                            <div className={styles.prodTime}><strong>Updated Date :</strong>{prod.updatedAt.substring(0,10)}</div>
                        </div>
                        <div className={styles.prodButton}>
                            <Link to={`/adminedit/${prod._id}`}>
                                <button className={styles.editbtn}>Edit</button>
                            </Link>
                            <button  onClick={() => deleteItem(prod._id,page,limit,sortBy,order)}  className={styles.deletebtn}>Delete</button>
                        </div>
                    </div>
                    )
            }
            </div>
            <div className={styles.pagination} >
                <Pagination handlePageChange={handlePageChange}  currentPage={page} totalPages={total}/>
            </div>
            </div>
    </div>
    </>
    
  )
}
