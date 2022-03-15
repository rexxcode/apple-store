import React , {Component} from 'react';
import Section from "./style/section.module.css";
import Iphone from "../assets/asset-19.jpeg";
import Silicone1 from "../assets/asset-26.jpeg";
import Silicone2 from "../assets/asset-31.jpeg";


class Section5 extends Component {
    render () {
        return (
            <div>
                <div className={Section.text}>
                    <p> 
                        <span> The latest. </span>
                        Take a look at what's new, right now.     
                    </p>
                </div>
                <div className={Section.row}>
                    <div className={Section.card_sec5}>
                        <div className={Section.text}>
                            <span>In with the new.</span>
                        </div>
                        <p>Discover fresh new colors for your favorite accessories.</p>     
                    </div>
                    <div className={Section.card_prod}>
                        <img src={Iphone} alt="Iphone-13" /> 
                        <small>New</small>                  
                        <p>iPhone 13 Pro Silicone Case with MagSafe - Nectarine</p>
                        <span>$49.00</span>
                    </div>
                    <div className={Section.card_prod}>
                        <img src={Silicone1} alt="Iphone-13" /> 
                        <small>New</small>                  
                        <p>iPhone SE Silicone Case - Chalk Pink</p>
                        <span>$35.00</span>
                    </div>
                    <div className={Section.card_prod}>
                        <img src={Silicone2} alt="Iphone-13" /> 
                        <small>New</small>                  
                        <p>iPhone 13  Silicone Case with MagSafe - Blue Fog</p>
                        <span>$49.00</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section5;