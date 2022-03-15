import React, { Component } from 'react';
import Section from "../components/style/section.module.css";
import {FaShoppingBag, FaBox,FaRegGrinAlt,FaLaptop} from "react-icons/fa";

class Section4 extends Component {
    render (){
        return (
            <div>
                 <div className={Section.text}>
                    <p> 
                        <span>The Apple difference. </span>
                        Even more reasons to shop with us
                    </p>
                </div>
                <div className={Section.row}>
                        <div className={Section.card_sec4}>
                            <div className={Section.icon_biru}>
                                <FaShoppingBag />
                            </div>
                            <p>
                                <span className={Section.biru}>Convenient pickup options </span>                    
                                that fit into your everyday schedule.
                            </p>
                        </div>
                        <div className={Section.card_sec4}>
                            <div className={Section.icon_pink}>
                                <FaBox />
                            </div>
                            <p>
                                Choose fast, free delivery or
                                <span className={Section.pink}> two-hour courier delivery.</span>                    
                            </p>
                        </div>
                        <div className={Section.card_sec4}>
                            <div className={Section.icon_biru}>
                                <FaRegGrinAlt />
                            </div>
                            <p>
                               Make them yours. 
                                <span className={Section.biru}> Engrave a mix of emoji, names, and numbers for free.</span>                    
                            </p>
                        </div>
                        <div className={Section.card_sec4}>
                            <div className={Section.icon_ungu}>
                                <FaLaptop />
                            </div>
                            <p>
                                <span className={Section.ungu}>Trade in your current device. </span>                    
                                Get credit toward a new one.
                            </p>
                        </div>
                </div>
            </div>
        )
    }
}
export default Section4;