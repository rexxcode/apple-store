import React, { Component } from 'react';
import Section from "../components/style/section.module.css";
import User from "../assets/asset-15.jpeg";
import App from "../assets/asset-16.jpeg";
class Section3 extends Component {
    render (){
        return (
            <div>
                <div className={Section.text}>
                    <p> 
                        <span> Help is here. </span>
                        Whenever and however you need it.     
                    </p>
                </div>
                <div className={Section.row}>
                    <div className={Section.col}>
                        <div className={Section.card}>
                            <p className={Section.card_body}>
                                <span>Shop one on one with a specialist. Online or in store</span>                    
                            </p>
                            <img src={User} alt="Asset" />                   
                        </div>
                    </div>
                    <div className={Section.col}>
                        <div className={Section.card}>
                            <p>
                                Get to know your new device with a free Personal Session
                            </p>
                            <img src={App} alt="Asset" />                   
                        </div>
                        <div className={Section.cardsmall}>
                            <p>
                                Get expert service and support at the Genius Bar.
                            </p>
                                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section3;