import React, { Component } from 'react';
import Section from "./style/section.module.css";
import virtual from "../assets/asset-71.jpeg";
import Menu from "../assets/asset-72.jpeg";
import Apple from "../assets/asset-73.jpeg";
import App from "../assets/asset-74.jpg";

class Section7 extends Component {
    render (){
        return (
            <div>
                <div className={Section.text}>
                    <p> 
                        <span> Do more with Apple products. </span>
                        Here's where the fun begins.     
                    </p>
                </div>
                <div className={Section.row}>
                    <div className={Section.card_sec7}>
                        <div className={Section.text7}>
                            <p>WATCH AND LEARN</p>     
                            <span>Join Today at Apple virtual session.</span>
                        </div>
                        <img src={virtual} alt="Iphone-13" /> 
                    </div>
                    <div className={Section.card}>
                            <div className={Section.text7}>
                                <span>Six Apple services. One easy subscription.</span>
                            </div>
                        <img src={Menu} alt="Iphone-13" /> 
                    </div>
                    <div className={Section.card}>
                            <div className={Section.text7}>
                                <span>Discover all the ways to use Apple Pay.</span>
                            </div>
                        <img src={Apple} alt="Iphone-13" /> 
                    </div>
                    <div className={Section.card}>
                            <div className={Section.text7}>
                                <span>See how one app can control your entire home.</span>
                            </div>
                        <img src={App} alt="Iphone-13" /> 
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Section7;