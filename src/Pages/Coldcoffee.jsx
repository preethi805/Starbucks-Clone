import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Coldcoffee.css";

export default function ColdCoffee() {
  const products = [
    { id: 1, name: "Nitro Cold Brew", desc: "Smooth & Rich.", img: "./Assets/nitro_cold.png", price: 320 },
    { id: 2, name: "Iced Caramel Macchito", desc: "Creamy & Refreshing.", img: "./Assets/iced caramel.png", price: 350 },
    { id: 3, name: "Iced Hazelnut Oatmilk Expresso", desc: "Creamy & Drooling.", img: "./Assets/oatmilk.png", price: 410 },
    { id: 4, name: "Vanilla Cold Brew", desc: "Bright & Mellow.", img: "./Assets/vaniilabrew.png", price: 300 },
    { id: 5, name: "Iced Green Tea Latte", desc: "Bright & Mellow.", img: "./Assets/icedgreentea.png", price: 350 },
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
      <h2>ColdCoffee</h2>
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



