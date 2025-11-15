// import React, { useContext } from 'react';
// import '../Styles/Explore.css';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from './.CartContext';

// export default function Explore() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);

//   const products = [
//     {
//       name: 'Java Chip Frappuccino',
//       price: '$429.09',
//       img: './Assets/javachipfrap.PNG'
//     },
//     {
//       name: 'Pumpkin Spice Latte',
//       price: '$489.49',
//       img: './Assets/pumpkinspice.png',
//     },
//     {
//       name: 'Vanilla Latte',
//       price: '$349.49',
//       img: './Assets/vannilalatte.png',
//     },
//     {
//       name: 'Hot Chocolate',
//       price: '$339.19',
//       img: './Assets/hotchoco.png',
//     },
//     {
//       name: 'Cluster Frappuccino',
//       price: '$409.49',
//       img: './Assets/frappuccino.png',
//     },
//     {
//       name: 'Cold Brew',
//       price: '$299.49',
//       img: './Assets/coldbrew.png',
//     },
//   ];

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     navigate('/Cart'); // Navigate to cart after adding
//   };

//   return (
//     <div className="product-grid">
//       {products.map((product, index) => (
//         <div className="card" key={index}>
//           <div className="img">
//             <img style={{ height: "120px", width: "70%" }} src={product.img} alt={product.name} />
//           </div>
//           <div className="card-info">
//             <p className="text-title">{product.name}</p>
//             <p className="text-body">Rich chocolate spheres filled with silky caramel and topped with delicate chocolate shavings.</p>
//           </div>
//           <div className="card-footer">
//             <span className="text-title">{product.price}</span>
//             <button onClick={() => handleAddToCart(product)} className="add-btn">Add to Cart</button>
//             <div className="card-button">
//               <svg className="svg-icon" viewBox="0 0 20 20">
//                 {/* SVG Path code here */}
//               </svg>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// import React from 'react'
// import '../Styles/Explore.css'

// export default function Explore() {
//   return (
//     <div>
//       {/* first */}
//       <div style={{display:"flex",marginLeft:"120px"}}>
//         <div class="card">
//      <div class="img"><img style={{height:"120px",width:"70%"}} src="./Assets/javachipfrap.PNG" alt="" /></div>
//   <div class="card-info">
//     <p class="text-title">JavaChipFrappucino</p>
//     <p class="text-body">a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.</p>   
//   </div>
//   <div class="card-footer">
//   <span class="text-title">$422.49</span>
//   <h4 style={{marginLeft:"70px"}}>Add to Cart</h4>
//   <div class="card-button">
//   <svg class="svg-icon" viewBox="0 0 20 20">
//       <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
//       <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
//       <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
//     </svg>
//   </div>
// </div></div>

// {/* second */}
//   <div class="card">
//      <div class="img"><img style={{height:"120px",width:"70%"}} src="./Assets/pumpkinspice.png" alt="" /></div>
//   <div class="card-info">
//     <p class="text-title">PumpkinSpiceLatte</p>
//     <p class="text-body">a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.</p>   
//   </div>
//   <div class="card-footer">
//   <span class="text-title">$449.49</span>
//   <h4 style={{marginLeft:"70px"}}>Add to Cart</h4>
//   <div class="card-button">
//   <svg class="svg-icon" viewBox="0 0 20 20">
//       <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
//       <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
//       <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
//     </svg>
//   </div>
// </div></div>

// {/* third */}
//   <div class="card">
//      <div class="img"><img style={{height:"120px",width:"70%"}} src="./Assets/vannilalatte.png" alt="" /></div>
//   <div class="card-info">
//     <p class="text-title">VannilaLatte</p>
//     <p class="text-body">a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.</p>   
//   </div>
//   <div class="card-footer">
//   <span class="text-title">$299.49</span>
//   <h4 style={{marginLeft:"70px"}}>Add to Cart</h4>
//   <div class="card-button">
//   <svg class="svg-icon" viewBox="0 0 20 20">
//       <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
//       <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
//       <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
//     </svg>
//   </div>
// </div></div></div>

// {/* fourth */}
//  <div style={{display:"flex",marginLeft:"120px"}}>
//   <div class="card">
//      <div class="img"><img style={{height:"120px",width:"70%"}} src="./Assets/coldbrew.png" alt="" /></div>
//   <div class="card-info">
//     <p class="text-title">ColdBrew</p>
//     <p class="text-body">a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.</p>   
//   </div>
//   <div class="card-footer">
//   <span class="text-title">$278.49</span>
//   <h4 style={{marginLeft:"70px"}}>Add to Cart</h4>
//   <div class="card-button">
//   <svg class="svg-icon" viewBox="0 0 20 20">
//       <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
//       <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
//       <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
//     </svg>
//   </div>
// </div></div>

// {/* Fifth */}
//   <div class="card">
//      <div class="img"><img style={{height:"120px",width:"70%"}} src="./Assets/frappuccino.png" alt="" /></div>
//   <div class="card-info">
//     <p class="text-title">Frappuccino</p>
//     <p class="text-body">a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.</p>   
//   </div>
//   <div class="card-footer">
//   <span class="text-title">$325.19</span>
//   <h4 style={{marginLeft:"70px"}}>Add to Cart</h4>
//   <div class="card-button">
//   <svg class="svg-icon" viewBox="0 0 20 20">
//       <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
//       <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
//       <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
//     </svg>
//   </div>
// </div></div>

// {/* sixth */}
//   <div class="card">
//      <div class="img"><img style={{height:"120px",width:"70%"}} src="./Assets/hotchoco.png" alt="" /></div>
//   <div class="card-info">
//     <p class="text-title">HotChoco</p>
//     <p class="text-body">a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.</p>   
//   </div>
//   <div class="card-footer">
//   <span class="text-title">$249.49</span>
//   <h4 style={{marginLeft:"70px"}}>Add to Cart</h4>
//   <div class="card-button">
//   <svg class="svg-icon" viewBox="0 0 20 20">
//       <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
//       <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
//       <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
//     </svg>
//   </div>
// </div></div></div>
      
      
//     </div>
//   )
// }

import { useNavigate } from "react-router-dom";

// import myimg from "./img/voyageblend-removebg-preview.png"

export default function ProductCard() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Create a product object
    const product = {
      name: "PumpkinSpiceLatte",
      price: 449.49,
      image: "./Assets/pumpkinspice.png",
      quantity: 1,
    };
  

    // Get existing cart from localStorage (or empty array if none)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product
    cart.push(product);

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Go to the cart page
    navigate("/cart");
  };

  return (
    <div className="card">
      <div className="img">
        <img
          style={{ height: "120px", width: "70%" }}
          src="./Assets/pumpkinspice.png"
          alt=""
        />
      </div>
      <div className="card-info">
        <p className="text-title">PumpkinSpiceLatte</p>
        <p className="text-body">
          a luxurious assortment of premium coffee beans coated in rich chocolate and metallic finishes.
        </p>
      </div>
      <div className="card-footer">
        <span className="text-title">$449.49</span>
        <h4
          onClick={handleAddToCart}
          style={{ marginLeft: "70px", cursor: "pointer", color: "green" }}
        >
          Add to Cart
        </h4>
        <div className="card-button">
          {/* your svg here */}
        </div>
      </div>

<img src={myimg} alt="" />
      
    </div>

    
  );
}






