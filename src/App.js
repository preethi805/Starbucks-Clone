import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./Pages/Home";
import Drinks from "./Pages/Drinks";
import Cart from "./Pages/Cart";
import Gift from "./Pages/Gift";
import Foods from "./Pages/Foods";
import Refreshers from "./Pages/Refreshers";
import CoffeeatHome from "./Pages/Coffeeathome";
import Explore from "./Pages/Explore";
import Readytoeat from "./Pages/Readytoeat";
import Checkout from "./Pages/Checkout";
import Formlogin from "./Pages/Formlogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColdCoffee from "./Pages/Coldcoffee";
import HotCoffee from "./Pages/Hotcoffee";
import HotTea from "./Pages/Hottea";
import ColdTea from "./Pages/Coldtea";
import Frappuccinos from "./Pages/Frappuccinos";
import SignupSigninWithMockAPI from "./Pages/Formlogin";

function App() {
  return (
    <div className="cursive-text">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gift" element={<Gift />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Foods" element={<Foods />} />
        <Route path="/Refreshers" element={<Refreshers />} />
        <Route path="/Coffeeathome" element={<CoffeeatHome />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Readytoeat" element={<Readytoeat />} />
        {/* Drinks home */}
        <Route path="/" element={<Drinks />} />

        {/* Category routes */}
        <Route path="/cold-coffee" element={<ColdCoffee />} />
        <Route path="/hot-coffee" element={<HotCoffee />} />
        <Route path="/hot-tea" element={<HotTea />} />
        <Route path="/cold-tea" element={<ColdTea />} />
        <Route path="/frappuccinos" element={<Frappuccinos />} /> 
        <Route path="/Freshers" element={<Refreshers />} />
        <Route path="/Formlogin" element={<Formlogin />} />
    
       
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        theme="colored"
      />

      


    </div>
  );
}

export default App;


