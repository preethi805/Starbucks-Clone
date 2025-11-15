import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styles/Coffeeathome.css';

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

    // Show toast instead of navigate
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 15px",
        fontSize: "14px",
      },
    });
  };

  const products = [
    {
      id:"Voyage Blend",
      name:"Voyage Blend",
      price: 1449.49,
      image: "./Assets/voyageblend-removebg-preview.png",
      description:
        "Sweet strawberry flavors accented by passionfruit ,shaken with ice and real strawberry pieces ",
    },
    {
      id: "Via Columbia",
      name: "Via Columbia",
      price: 1199.08,
      image: "./Assets/viacolumbia.png",
      description:
        "A sweet summer blend of raspberry, blueberry and blackberry flavors, shaken with ice and poured over raspberry-flavored pearls .",
    },
    {
      id: "Kenya",
      name: "Kenya",
      price: 1699.06,
      image: "./Assets/Kenya.png",
      description: "A combination of sweet mango, tangy dragon fruit, and other complementary ingredients that create a harmonious flavor profile.",
    },
    {
       id: "Italian Roast",
      name: "Italian Roast",
      price: 1609.09,
      image: "./Assets/italianroast.png",
      description: "Passionfruit combined with creamy coconutmilk. Fruity and refreshing.",
    },
    {
       id: "Odeseey Blend",
      name: "Odeseey Blend",
      price: 1399.09,
      image: "./Assets/odyseey.png",
      description: "A sweet summer blend of raspberry, blueberry and blackberry flavors, shaken with ice and creamy coconutmilk and poured.", 
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft:"120px" }}>
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
                  <path d="M6 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                <span>Add to Cart</span>
              </button>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {};
