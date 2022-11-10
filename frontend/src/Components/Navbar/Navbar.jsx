import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { BsChevronDown } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import {  HiOutlineHeart } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Signinfunction from "./Signinfunction.jsx";
import NavbarCarousel from "./NavbarCarousel"

const Navbar = () => {
   const menuItems = [
    {
      title: 'CATEGORY',
      url: '/SUPER_DEALS',
    },
    {
      title: 'SUPER DEALS',
      url: '/SUPER_DEALS',
    },
    {
      title: 'APP ONLY',
      url: '/APP_ONLY',
    },
    {
      title: 'NEW ARRIVALS',
      url: '/NEW_ARRIVALS',
    }
  ];
  
  return (
    <>
    <div className={styles.outerbar}>
      <div className={styles.containerNavbar}>
        {/* <a href="" alt=""></a> */}
        <div className={styles.topNavbarSEction}>
          <img src="footerLogo.png" alt=""></img>
          <div>
            <div className={styles.navbarlnguageSection}>
              <p>
                {" "}
                <IoIosPhonePortrait className={styles.icksPhone} /> Save $3 with
                App <BsChevronDown className={styles.icks} />{" "}
              </p>
              <p>
                {" "}
                Support Center <BsChevronDown className={styles.icks} />{" "}
              </p>
              <p>
                {" "}
                Language <BsChevronDown className={styles.icks} />{" "}
              </p>
              <p>
                {" "}
                Country Website <BsChevronDown className={styles.icks} />{" "}
              </p>
            </div>
            <div className={styles.navbarSearchSection}>
              <div>
                <select>
                  <option>All</option>
                </select>
                <input placeholder="Search Products" />
                <p>
                  <BiSearch size={"23px"}></BiSearch>
                </p>
              </div>
              <p><Signinfunction></Signinfunction></p>

              <a href="#" alt="">
                <HiOutlineHeart size={"25px"}></HiOutlineHeart>
                <p>Favourites</p>
              </a>


              <a href="#" alt="">
                <FiShoppingCart size={"25px"} color="#ffda00"></FiShoppingCart>
                <p>Cart</p>
              </a>
            </div>
          </div>
        </div>
      </div>
          </div>
          <div className={styles.mainDropdown}>
        
        {menuItems.map((e)=>(
        <div><p>{e.title}</p></div>
        ))}
      </div>
      <div className={styles.megaDropdownBox}>
        <div className={styles.navbarMegaDropdown}>
        <div> <a href=" ">Consumer Electronics </a> </div>
           <div> <a href=" "> Industrial & Scientific </a> </div>
           <div> <a href=" ">Cell Phones & Accessories </a> </div>
           <div> <a href=" ">Appliances </a> </div>
           <div> <a href=" "> Outdoors, Fitness & Sports </a> </div>
           <div> <a href=" ">Computers, Tablets & Office </a> </div>
           <div> <a href=" ">Health & Personal Care </a> </div>
           <div> <a href=" ">Home Improvement & Tools </a> </div>
           <div> <a href=" ">Drones, Toys & Hobbies </a> </div>
           <div> <a href=" ">Home & Garden </a> </div>
           <div> <a href=" ">Motor & Car Electronics </a> </div>
           <div> <a href=" ">Men's Fashion </a> </div>
           <div> <a href=" ">Watches & Jewelry </a> </div>
           <div> <a href=" ">Gearbest Promotion </a> </div>
        </div>
        <div className={styles.navbarCaurosol}>
          <NavbarCarousel></NavbarCarousel>
        </div>
      </div>
    </> 
  );
};

export default Navbar;
