import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styles/Refreshers.css';

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
    });
  };

  const products = [
    { id: "strawberry-acai", name: "Strawberry Acai", price: 449.49, image: "./Assets/strawberryacai.png", description: "Sweet strawberry flavors shaken with passionfruit and real strawberry pieces." },
    { id: "summer-berry", name: "Summer Berry", price: 439.12, image: "./Assets/summerberry.png", description: "Raspberry, blueberry and blackberry flavors with raspberry-flavored pearls." },
    { id: "mango-sago", name: "Mango Sago", price: 459.23, image: "./Assets/mangosago.png", description: "Sweet mango blended with complementary flavors for a harmonious profile." },
    { id: "pink-drink", name: "Pink Drink", price: 399.81, image: "./Assets/pinkdrink.png", description: "Passionfruit combined with creamy coconut milk — fruity and refreshing." },
    { id: "summerskies", name: "Summerskies", price: 350.08, image: "./Assets/summerskies.png", description: "Berry blend shaken with ice and creamy coconut milk." },
    { id: "dragon-drink", name: "Dragon Drink", price: 400.09, image: "./Assets/dragondrink.png", description: "Tropical pick-me-up with mango and dragonfruit flavors." },
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
                    <path d="M0 1.5A.5.5 0 0 1 .5 1h1.11a..."/>
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

