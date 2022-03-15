import React, { Component } from "react";
import Styles from "../components/style/store.module.css";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";
import Section6 from "../components/section6";
import Section7 from "../components/section7";
import Section8 from "../components/section8";
import Footer from "../components/footer";

class Store extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.section1}>
          <div className={Styles.text}>
            <span>Store.</span>
            The best way to buy the products you love.
          </div>
          <div className={Styles.text1}> 
            <p>Need Shopping help?</p>
            <p>Ask a Spesialist</p>
            <p>Visit a Apple Store</p>
            <p>Find one near you</p>
          </div>
        </div>
        <div className={Styles.section2}>
            <Section1 />
        </div>
        <div className={Styles.section1}>
            <Section2 />
            
        </div>
        <div className={Styles.section1}>
            <Section3 />
            
        </div>
        <div className={Styles.section1}>
            <Section4 />
            
        </div>
        <div className={Styles.section1}>
            <Section5 />
            
        </div>
        <div className={Styles.section1}>
            <Section6 />
            
        </div>
        <div className={Styles.section1}>
            <Section7 />
            
        </div>
        <div className={Styles.section1}>
            <Section8 />
            
        </div>
        <div className={Styles.section1}>
            <Footer />
            
        </div>
      </div>
    );
  }
}
export default Store;
