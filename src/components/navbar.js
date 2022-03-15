import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./style/navbar.module.css";
import {FaApple , FaSistrix , FaShoppingBag} from "react-icons/fa";
class Navbar extends Component {
    render(){
        return (
           <nav>
                <div className={Styles.header}>
                    <div>
                        <FaApple className={Styles.logo}/>
                    </div>
                    <ul className={Styles.menu}>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="#">Mac</Link></li>
                        <li><Link to="#">iPad</Link></li>
                        <li><Link to="#">iPhone</Link></li>
                        <li><Link to="#">Watch</Link></li>
                        <li><Link to="#">AirPods</Link></li>
                        <li><Link to="#">TV Home</Link></li>
                        <li><Link to="#">Only on Apple</Link></li>
                        <li><Link to="#">Accesories</Link></li>
                        <li><Link to="#">Support</Link></li>
                    </ul>
                    <div>
                        <FaSistrix className={Styles.logo}/>
                        <FaShoppingBag className={Styles.logo}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;