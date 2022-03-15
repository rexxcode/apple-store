import React, { Component } from "react";
import section from "./style/section.module.css";
import mac from "../assets/mac.png";
import iphone from "../assets/iphone.png";
import ipad from "../assets/ipad.png";
import watchs from "../assets/watch.png";
import airpods from "../assets/airpods.png";
import airtags from "../assets/airtags.png";
import appletv from "../assets/appletv.png";
import homepod from "../assets/homepod.png";
// import accesories from "../assets/accessories.png";
// import giftcards from "../assets/giftcards.png";


class Section1 extends Component {
    render(){
        return (
            <div className={section.baris}>
                <div className={section.gambartext}>
                    <img src={mac} />
                    <p>Mac</p>
                </div>
                <div className={section.gambartext}>
                    <img src={iphone} />
                    <p>iPhone</p>
                </div>
                <div className={section.gambartext}>
                    <img src={ipad} />
                    <p>iPad</p>
                </div>
                <div className={section.gambartext}>
                    <img src={watchs} />
                    <p>Apple Watch</p>
                </div>
                <div className={section.gambartext}>
                    <img src={airpods}/>
                    <p>AirPods</p>
                </div>                
                <div className={section.gambartext}>
                    <img src={airtags} />
                    <p>AirTag</p>
                </div>
                <div className={section.gambartext}>
                    <img src={appletv} />
                    <p>Apple TV</p>
                </div>
                <div className={section.gambar}text> 
                    <img src={homepod} />
                    <p>HomePod mini</p>
                </div>
                {/* <img src={accesories} /> */}
                {/* <img src={giftcards} /> */}
            </div>
        )
    }
}
export default Section1;


