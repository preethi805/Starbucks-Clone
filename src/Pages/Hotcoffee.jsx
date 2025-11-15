// import React from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import "../Styles/Hotcoffee.css";

// export default function HotCoffee() {
//   const navigate = useNavigate();

//   const products = [
//     { id: 1, name: "Flat White Latte", desc: "Strong & bold." },
//     { id: 2, name: "Americano", desc: "Smooth & classic." },
//     { id: 3, name: "Iced Latte", desc: "Creamy & refreshing." },
//     { id: 4, name: "Cappuccino", desc: "Frothy & rich." },
//     { id: 5, name: "Machhito", desc: "Chocolatey & sweet." },
//   ];

//   const handleAddToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Show toast notification
//     toast.success(`${product.name} added to cart!`, {
//       position: "top-right",
//       autoClose: 1500,
//     });

//     // Navigate to cart after short delay (so toast is visible)
//     setTimeout(() => {
//       navigate("/cart");
//     }, 500);
//   };

//   return (
//     <div className="products-page">
//       <h2>Hot Coffee</h2>
//       <div className="products-grid">
//         {products.map((p) => (
//           <div key={p.id} className="product-card">
//             <div
//               style={{
//                 width: "100%",
//                 height: "150px",
//                 background: "#ccc",
//                 borderRadius: "12px",
//               }}
//             ></div>
//             <h3>{p.name}</h3>
//             <p>{p.desc}</p>
//             <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Hotcoffee.css";

export default function ColdCoffee() {
  const products = [
    { id: 1, name: "Flat White", desc: "Smooth & rich.", img: "./Assets/flatwhite.png", price: 220 },
    { id: 2, name: "Caffe Latte", desc: "Creamy & refreshing.", img: "./Assets/caffelatte.png", price: 180 },
    { id: 3, name: "Caffe Americano", desc: "Creamy & rich.", img: "./Assets/americano.png", price: 200 },
    { id: 4, name: "Caramel Macchito", desc: "Bright & Tendering.", img: "./Assets/Caramel Macchiato.png", price: 190 },
     { id: 5, name: "Cappuccino", desc: "Bright & Tendering.", img: "./Assets/Cappuccino.png", price: 190 },
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
      <h2>HotCoffee</h2>
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

