import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Drinks.css";



export default function Drinks() {
  const categories = [
    { name: "Cold Coffee", path: "/cold-coffee" },
    { name: "Hot Coffee", path: "/hot-coffee" },
    { name: "Hot Tea", path: "/hot-tea" },
    { name: "Cold Tea", path: "/cold-tea" },
    { name: "Frappuccinos", path: "/frappuccinos" },
    { name: "Freshers", path: "/freshers" },
  ];

  const sliderImages = [
    "./Assets/slide1.jpeg",
    "./Assets/slide2.jpg",
    "./Assets/slide3.jpg",
    "./Assets/slide1.jpeg",

  ];

  return (
    <div className="drinks-page-vertical">
      {/* Sidebar menu */}
      <aside className="vertical-menu">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="menu-item">
            {cat.name}
          </Link>
        ))}
      </aside>

      {/* Smooth Image Slider */}
      <div className="vertical-slider">
        <div className="slider-track">
          {sliderImages.concat(sliderImages).map((src, idx) => (
            <div key={idx} className="slide">
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
     
      <br></br>
      <br></br>

       
  
    </div>
  );
}

