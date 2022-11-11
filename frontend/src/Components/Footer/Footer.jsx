import React from "react";
import styles from "./Footer.module.css";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsPinterest,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { TiSocialTumbler } from "react-icons/ti";

const Footer = () => {
  return (
    <div style={{ background: "#fbfbfb" }}>
      <div className={styles.qualitySection}>
        <div>
          <img src="footerLogo.png" alt="" />
          <p>AFFORDABLE QUALITY</p>
          <p>FUN SHOPPING</p>
        </div>
        <img src="footerQuality.png" alt="" />

      </div>
      <div className={styles.newslter}>
        <div>
          Newsletter
          <input placeholder="Enter Email to get 50 Points" />
          <button>Subscribe</button>
        </div>
        <div>
          <BsFacebook size={"30px"} />
          <BsMessenger size={"30px"} /> <BsYoutube size={"30px"} />{" "}
          <BsPinterest size={"30px"} /> <SlSocialVkontakte size={"30px"} />{" "}
          <BsInstagram size={"30px"} /> <BsTwitter size={"30px"} />
          <TiSocialTumbler size={"30px"} />
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.footerCompanyInfo}>
          <h3>Company Information</h3>
          <ul>
            <li> About Us</li>
            <li> Top Searches</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li> Intellectual Property Policy</li>
            <li> Testimonials</li>
            <li>Contact Us</li>
            <li>Report Security Issue</li>
            <li>Sell on Gearbest</li>
            <li> Cookies Policy</li>
            <li>Top Brands</li>
            <li>Gearbest Official Blog</li>
          </ul>
        </div>
        <div className={styles.footerCompanyInfo}>
          <h3>Customer Service</h3>
          <ul>
            <li> Shipping Information</li>
            <li> My Favorites</li>
            <li>FAQ For Newsletter Subscription</li>
            <li>My Points</li>
            <li> Warranty and Return</li>
            <li>Payment Methods</li>
            <li>Deposit Expansion</li>
            <li>FAQ & Support</li>
            <li> Sitemap</li>
            <li> Gearbest Wallet Instruction</li>
            <li>FAQs about COVID-19</li>
          </ul>
        </div>
        <div className={styles.footerCompanyInfo}>
          <h3>Other Business</h3>
          <ul>
            <li> Partnership Programs</li>
            <li>Associate Program</li>
          </ul>
        </div>
        <div className={styles.footerCompanyInfo}>
          <h3>Download App!</h3>
          <ul>
            <li>Save $3 with App & New User Only</li>
            <div className={styles.qrcode}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div>
                <img
                  src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
                  alt=""
                />
                <img
                  src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png"
                  alt=""
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <img id={styles.footerPayment} src="footerPayment.png" alt=""></img>
      <div>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
