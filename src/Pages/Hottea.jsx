import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Hottea.css";

export default function HotTea() {
  const products = [
    { id: 1, name: "Plain Hottea", desc: "Smooth & rich.", img: "./Assets/Plaintea.webp", price: 220 },
    { id: 2, name: "Royal English Breakfasttea", desc: "Creamy & refreshing.", img: "./Assets/breakfasttea.png", price: 180 },
  
  ];

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = { ...product, quantity: 1 }; // store img inside product
    const index = cart.findIndex((i) => i.id === item.id);
    if (index > -1) cart[index].quantity += 1;
    else cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${product.name} added to cart!`, { autoClose: 1200, position: "top-right" });
  };

  return (
    <div className="products-page-horizontal">
      <h2>HotTea</h2>
      <div className="products-list-horizontal">
        {products.map((p) => (
          <div key={p.id} className="product-card-horizontal">
            <div className="product-img-horizontal">
              <img src={p.img} alt={p.name} onError={(e) => e.currentTarget.src="/images/placeholder.png"} />
            </div>
            <div className="product-details-horizontal">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="price">₹{p.price}</span>
              <button className="me" onClick={() => handleAddToCart(p)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


