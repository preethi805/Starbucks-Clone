import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styles/Foods.css';

export default function ProductCard() {
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex > -1) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const products = [
    { id: "basil-tomato", name: "Basil Tomato", price: 449.49, image: "./Assets/basiltomato.png", description: "The sweet aroma of basil balances tangy tomato — great for pastas, pizzas, salads." },
    { id: "avocado-salsa", name: "Avacado Salsa Sandwich", price: 599.06, image: "./Assets/avacadosalsa.png", description: "Creamy avocado and zesty salsa layered between fresh bread." },
    { id: "mushroom-sourdough", name: "Mushroom Sourdough", price: 399.66, image: "./Assets/mushroompesto.png", description: "Savor the rich, earthy flavor of sautéed mushrooms on crusty sourdough." },
    { id: "med-focaccia", name: "Mediterranean Focaccia", price: 349.11, image: "./Assets/foccacia.png", description: "Infused with olive oil, herbs, sun-dried tomatoes, and olives." },
    { id: "spinach-corn", name: "Spinach Corn", price: 219.60, image: "./Assets/tofu.png", description: "Tender spinach and sweet golden corn in a creamy filling." },
    { id: "smoked-chicken", name: "Smoked Chicken Salami", price: 619.03, image: "./Assets/smokedskers.png", description: "Rich, smoky chicken salami with fresh veggies." },
    { id: "paneer-tandoori", name: "Paneer Tandoori Sourdough", price: 699.55, image: "./Assets/panneer.png", description: "Tandoori-marinated paneer tucked in crusty sourdough." },
    { id: "chicken-salami", name: "Chicken Salami", price: 329.09, image: "./Assets/salad.png", description: "Tender chicken salami with crisp vegetables and creamy spreads." },
    { id: "spinach-croissant", name: "Spinach Croissant", price: 399.78, image: "./Assets/cornspinach.png", description: "Buttery croissant filled with a creamy spinach-cheese mix." },
  ];

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "120px" }}>
        {products.map((item) => (
          <div key={item.id} className="card" style={cardStyle}>
            <div className="img">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="card-info">
              <p className="text-title">{item.name}</p>
              <p className="text-body">{item.description}</p>
            </div>

            <div className="card-footer">
              <span className="text-title">₹{item.price}</span>
              <h4 onClick={() => handleAddToCart({ ...item, quantity: 1 })}>
                <button>
                  <svg viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1h1.11a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.49-.402L1.61 2H.5a.5.5 0 0 1-.5-.5M4.415 5l1.313 6h7.352l1.2-6z"/>
                    <path d="M6 13a1 1 0 1 0 0 2 ..."/>
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </>
  );
}

const cardStyle = {};

