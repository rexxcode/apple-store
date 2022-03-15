import React, { Component } from 'react';
import Styles from "../components/style/store.module.css";
class Section extends Component {
    render (){
        return (
            <div>
                <div className={Styles.text} >
                    
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
        )
    }
}
export default Section;