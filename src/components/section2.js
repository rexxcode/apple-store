import React , {Component} from 'react';
import Section from "./style/section.module.css";
import Iphone from "../assets/iphone-13e.jpg";
import Ipad from "../assets/ipad.jpg";
import Macstudio from "../assets/mac-studio.jpg";

class Section2 extends Component {
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
                    <div className={Section.card}>
                        <p>IPHONE 13 PRO</p>
                        <span>Oh. So. Pro.</span>
                        <p>Now in Alpine Green. From $999.00 or $41.62/mo. for 24 mo</p>     
                        <img src={Iphone} alt="Iphone-13" />                   
                    </div>
                    <div className={Section.carddark}>
                        <p>IPHONE 13 PRO</p>
                        <span>Oh. So. Pro.</span>
                        <p>Now in Alpine Green. From $999.00 or $41.62/mo. for 24 mo</p>     
                        <img src={Ipad} alt="Iphone-13" />                   
                    </div>
                    <div className={Section.card}>
                        <p>IPHONE 13 PRO</p>
                        <span>Oh. So. Pro.</span>
                        <p>Now in Alpine Green. From $999.00 or $41.62/mo. for 24 mo</p>     
                        <img src={Macstudio} alt="Iphone-13" />                   
                    </div>
                </div>
            </div>
        )
    }
}
export default Section2;