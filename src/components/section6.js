import React, { Component } from 'react';
import Section from "./style/section.module.css";
import Speaker from "../assets/asset-53.jpeg";
import Airpods from "../assets/asset-54.jpeg";
import Twe from "../assets/asset-55.jpeg";

class Section6 extends Component {
    render (){
        return (
            <div>
                <div className={Section.text}>
                    <p> 
                        <span> Loud and clear. </span>
                        Unparalledled choice for rich, high-quality sound.     
                    </p>
                </div>
                <div className={Section.row}>
                    <div className={Section.card}>
                        <div className={Section.text6}>
                            <span>Get 6 months of Apple Music free.</span>
                            <p>Include with purchase of select AirPods and Beats products, and HomePod mini.**</p>     
                        </div>
                        <img src={Speaker} alt="Iphone-13" /> 
                    </div>
                    <div className={Section.card_prod}>
                        <img src={Airpods} alt="Iphone-13" /> 
                        <small>Free Engarving</small>                  
                        <p>AirPods (3rd generation)</p>
                        <span>$179.00</span>
                    </div>
                    <div className={Section.card_prod}>
                        <img src={Twe} alt="Iphone-13" /> 
                        <small>Free Engarving</small>                    
                        <p>Beats Fit Pro True Wireless Earbuds -- Sage Gray</p>
                        <span>$199.99</span>
                    </div>
                    <div className={Section.card_prod}>
                        <img src={Airpods} alt="Iphone-13" /> 
                        <small>Free Engarving</small>                  
                        <p>AirPods Pro</p>
                        <span>$249.00</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section6;