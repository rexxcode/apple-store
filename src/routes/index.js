import React from "react";
import {Routes , Route} from "react-router-dom";
import Main from "../components/style/main.module.css";
import Store from "../pages/store";
import Shop from "../pages/shop";
import Buy from "../pages/buy";
import Checkout from "../pages/checkout";
import Navbar from "../components/navbar";

const Router = () => {
  return (
    <div className={Main}>
      <Navbar />
        <div className={Main.body}>
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/shop/:url" element={<Shop />} />
            <Route path="/shop/buy" element={<Buy />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
    </div>
  );
};

export default Router;
