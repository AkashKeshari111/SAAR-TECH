import React from 'react'
import styles from './Styles/single.module.css'
import image7 from "./image7/Capture.PNG"
import image8 from "./image8/Capture.PNG"
import image10 from "./image10/Capture.PNG"
import { Button, Stack } from '@chakra-ui/react'
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/AppReducer/action";

export default function Singleproduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.AppReducer.products);
  const [title ,settitle] =useState("")
  const [price ,setprice] =useState("")
  const [image ,setImage] =useState("")

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProduct());
    }
  }, [products.length, dispatch]);

  useEffect(() => {
    if (id) {
      const SingleData = products.find((elem) => elem.id === Number(id));
      SingleData && setImage(SingleData.image);
      SingleData && setprice(SingleData.price);
      SingleData && settitle(SingleData.title);

    }
  }, [products, id]);
  return (
    <>
    {/* star div start */}
    <div className={styles.imageup}>
      <img src={image7} alt="omnifood" />
      </div>
      {/* star div end */}


      {/* main div start */}
    <div className={styles.mainsinglepage}>

      {/* image div start */}
    <div className={styles.imagediv}>
      <img src={image} alt="" />
    </div>
    {/* image div end */}

    {/* rate div start */}
    <div className={styles.ratediv}>
    <div className={styles.hdiv}>
      <h1>{title}</h1>
    </div>
      <div className={styles.imagedown}>
        <img src={image8} alt="" />
      </div>
     <div className={styles.pricemaindiv}>
       <div className={styles.price}>
    <label>Price:</label>
    <div className={styles.dollar}>
    <span>{price} </span>
    <span> 20%off</span>
    </div>
    </div>
     </div>
     <div className={styles.pricemaindiv}>
       <div className={styles.price1}>
    <label>Shipping:</label>
    <div className={styles.shiping}>
      <p><span>FREE SHIPPING</span>	 to United States Via Registered Air Mail <br />
Ship between: <span>Nov 14 - Nov 18,</span> Estimated Shipping Time: 15-60 business days</p>
      
    </div>
    </div>
     </div>

     <div className={styles.buttondiv}>
     <Stack  mt={10} br={0} spacing={4} direction='row' align='center'>
  <Button borderRadius="0" colorScheme='' color='white' bg='#f30240' size='lg'>
    Add to Cart
  </Button>
  <Button borderRadius="0"  color='#F30240' border='1px' borderColor='#F30240' variant='outline' size='lg'>
    Buy Now
  </Button>
</Stack>
     </div>
     <div className={styles.fav}>
      <a><i class="fa-regular fa-heart"></i>  Add to Favorites</a>
     </div>
     <div className={styles.paypal}>
      <img src={image10} alt="" />
     </div>
    </div>
    {/* rate div enc */}
    </div>
     {/* main div end */}
    </>
  )
}
