import React, { Component } from 'react';
import Section from "./style/section.module.css";
import Mac from "../assets/asset-74.jpeg";
import Mac2 from "../assets/asset-76.jpeg";
import Mac3 from "../assets/asset-77.jpg";
import Ipad from "../assets/asset-75.jpeg";
class Section8 extends Component {
    render (){
        return (
            <div>
                <div className={Section.text}>
                    <p> 
                        <span> Shop by group. </span>
                        Get special for students businesses, and more.
                    </p>
                    <div className={Section.row}>
                        <div className={Section.card}>
                            <div className={Section.text7}>
                                <p>EDUCATION</p>
                                <span>Save on Mac or iPad with education pricing.</span>
                            </div>
                            <img src={Mac} alt="Mac or Ipad" /> 
                        </div>
                        <div className={Section.carddark}>
                            <div className={Section.text7}>
                                <p>BUSINESS</p>
                                <span>From enterprise to small business we'll work with you.</span>
                            </div>
                            <img src={Ipad} alt="Mac or Ipad" /> 
                        </div>
                        <div className={Section.carddark}>
                            <div className={Section.text7}>
                                <p>GOVERMENT</p>
                                <span>Special pricing is avaliable for state, local, and federal agencies.</span>
                            </div>
                            <img src={Mac2} alt="Mac or Ipad" /> 
                        </div>
                        <div className={Section.card}>
                            <div className={Section.text7}>
                                <p>VETERANS AND MILITARY</p>
                                <span>Active and veteran members may be eligible for exlusive savings.</span>
                            </div>
                            <img src={Mac3} alt="Mac or Ipad" /> 
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Section8;