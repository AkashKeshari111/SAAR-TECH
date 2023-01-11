import React from "react";
import styles from "./Styles/single.module.css";
import image7 from "./image7/Capture.PNG";
import image8 from "./image8/Capture.PNG";
import image10 from "./image10/Capture.PNG";
import { Button, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/AppReducer/action";

import { Link } from "react-router-dom";


const cartItem = JSON.parse(localStorage.getItem("cart")) || [];


export default function Singleproduct() {
  const { id } = useParams();
  const dispatch1 = useDispatch();
  const products = useSelector((state) => state.AppReducer.products);
  const [title, settitle] = useState("");
  const [singleProductData, setSingleProductData] = useState({});

  const [price, setprice] = useState("");
  const [image, setImage] = useState("");
  const [brand,setBrand] = useState("");
  const [discount,setDiscount] = useState("");
  const [prodName,setProdName] = useState("");



  

  useEffect(() => {
    if (products.length === 0) {
      dispatch1(getProduct());
    }
  }, [products.length, dispatch1]);

  useEffect(() => {
    if (id) {
      let SingleData = products.find((elem) => elem._id ===id);
      // console.log("abcdffggfd",SingleData)
      setSingleProductData(SingleData)
      SingleData && setImage(SingleData.product_img);
      SingleData && setprice(SingleData.product_price);
      SingleData && settitle(SingleData.product_title);
      SingleData && setBrand(SingleData.product_brand);
      SingleData && setDiscount(SingleData.product_discount);
      SingleData && setProdName(SingleData.product_name);

    }
  }, [products, id]);



  const AddToCart = (id,title,price,image,brand,discount,prodName) => {
    
    var x = cartItem.find((el) => {
      return el.id == id

    })
    // console.log(x)

    if(x !== undefined)
    {
      alert("Item is already Added!")
    }
    else{
      const qty = 1
        const obj = {id,title,price,image,qty,brand,discount,prodName}

        cartItem.push(obj)
        localStorage.setItem("cart" , JSON.stringify(cartItem));
        alert("Add To Cart Successfully!!");
    }

    

    

  };

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
                <p>
                  <span>FREE SHIPPING</span>to United States Via Registered Air
                  Mail
                  <br />
                  Ship between: <span>Nov 14 - Nov 18,</span> Estimated Shipping
                  Time: 15-60 business days
                </p>
              </div>
            </div>
          </div>

          <div className={styles.buttondiv}>
            <Stack mt={10} br={0} spacing={4} direction="row" align="center">
              <Button
                onClick={() => AddToCart(id,title,price,image,brand,discount,prodName)}
                borderRadius="0"
                colorScheme=""
                color="white"

                bg="#F30240"

                size="lg"
              >
                Add to Cart
              </Button>
              <Link to="/addcart">
                <Button
                  borderRadius="0"
                  color="#F30240"
                  border="1px"
                  borderColor="#F30240"
                  variant="outline"
                  size="lg"
                >
                  Buy Now
                </Button>
              </Link>
            </Stack>
          </div>
          <div className={styles.fav}>
            <a>
              <i class="fa-regular fa-heart"></i> Add to Favorites
            </a>
          </div>
          <div className={styles.paypal}>
            <img src={image10} alt="" />
          </div>
        </div>
        {/* rate div enc */}
      </div>
      {/* main div end */}
    </>
  );

}

