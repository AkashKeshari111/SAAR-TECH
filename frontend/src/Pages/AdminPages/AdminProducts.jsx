import React, { useEffect, useState } from 'react'
import styles from '../AdminStyles/AdminProducts.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import AdminNavbar from './AdminNavbar';


export const AdminProducts = () => {

    const [data,setData] = useState();

    const [page,setPage] = useState(1);
    const [order,setOrder] = useState("asc");
    const [sortBy,setSortBy] = useState("product_price");
    const [limit,setLimit] = useState(12);
    const [total,setTotal]=useState();

    const token = localStorage.get("token")





    const getYourData=({page,limit,sortBy,order})=>{
       return axios.get(`https://saartech-production.up.railway.app/admin/product?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`,{
            
            headers:{

                "token":`Bearer ${token}`

            }
        })
}
    

    const deleteItem = (id) => {
        
        console.log(id)
        axios.delete(`https://saartech-production.up.railway.app/admin/product/${id}`,{
            headers:{
                "token":`Bearer ${token}`
            }
        })
        .then((res) => {
            getYourData()
            console.log(res)
        })

    }

    const handleChange=(e)=>{
        
        setOrder(e.target.value)
        // setSortBy(order==="asc"?1:-1)
        
        console.log(e.target.value)
      }

    //   const onChange=(value)=>{

    //     setPage(prev=>prev+value)

    // }

    const handlePageChange = (value) => {
        setPage(value);
     };
 
   useEffect(()=>{
        
    getYourData({page,limit,sortBy,order})
    .then(res=>{
        setData(res.data.data)
        // console.log("sahil",res.data.totalPages)
        setTotal(res.data.totalPages)

    })
    .catch((err) => {
        console.log(err)
    })
   
},[page,limit,sortBy,order])


//     const [data,setData] = useState();
// const token = localStorage.get("token")

//     const getYourData=()=>{
//         axios.get("http://localhost:8080/admin/product",{
//             headers:{

//                 "token":`Bearer ${token}`

//             }
//         })
// }
//     useEffect(()=>{
//         getYourData()
//     },[])
  return (
    <>
    <AdminNavbar />
    <div className={styles.box} >
    <div className={styles.filterBox} >
        <div>
            <p><strong>Sort by Title:</strong></p>
            <select onChange={handleChange}>
                <option value='desc' >A-Z</option>
                <option value='asc' >Z-A</option>
            </select>
        </div>
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
                        <div className={styles.prodImg} ><img src={prod.img} alt='' /></div>
                        <div className={styles.prodTitle}><strong>Title :</strong>{prod.product_name}</div>
                        <div className={styles.prodPrice}><strong>Price :</strong>{prod.product_price}</div>
                        <div className={styles.prodTime}><strong>Updated Time :</strong>{prod.updatedAt}</div>
                        <div className={styles.prodButton}>
                            <Link to={`/adminedit/${prod._id}`}>
                                <button className={styles.btn}>Edit</button>
                            </Link>
                            <button  onClick={() => deleteItem(prod._id)}  className={styles.btn}>Delete</button>
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
