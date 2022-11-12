import React from "react";
import styles from "./Navbar.module.css";
import { BsChevronDown } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Signinfunction from "./Signinfunction.jsx";
import NavbarCarousel from "./NavbarCarousel";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const menuItems = [
    {
      title: "SUPER DEALS",
      url: "/SUPER_DEALS",
    },
    {
      title: "APP ONLY",
      url: "/APP_ONLY",
    },
    {
      title: "NEW ARRIVALS",
      url: "/NEW_ARRIVALS",
    },
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
                  <IoIosPhonePortrait className={styles.icksPhone} /> Save $3
                  with App <BsChevronDown className={styles.icks} />{" "}
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
                <p>
                  <Signinfunction></Signinfunction>
                </p>

                <a href="#" alt="">
                  <HiOutlineHeart size={"25px"}></HiOutlineHeart>
                  <p>Favourites</p>
                </a>



              <a href="/cart" alt="">
                <FiShoppingCart size={"25px"} color="#ffda00"></FiShoppingCart>
                <p>Cart</p>
              </a>

   
              </div>


            </div>
          </div>
        </div>
        <div className={styles.footerLogoNavbarDropdown}>
          <img src="/footerLogo.png" alt=""></img>
          <div className={styles.midScreenNavbar}>
            <select>
              <option>All</option>
            </select>
            <input placeholder="Search Products" />
            <p>
              <BiSearch size={"23px"}></BiSearch>
            </p>
          </div>
          <div className={styles.midSectionSign}>
            <Signinfunction></Signinfunction>
          </div>
        </div>
        <div className={styles.sideNavbarCompo}>
          {" "}
          <SideNavbar></SideNavbar>
        </div>

        <div className={styles.megaDropdownBox}>
          <NavbarCarousel></NavbarCarousel>
        </div>
      </div>
    </>
  );
};

export default Navbar;
