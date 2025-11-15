import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styles/Explore.css';

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

    toast.success("✅ Your product is added to your cart!", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const products = [
    { id: "pumpkin-001", name: "PumpkinSpiceLatte", price: 449.49, image: "./Assets/pumpkinspice.png", description: "Espresso and steamed milk with pumpkin, cinnamon, nutmeg and clove" },
    { id: "java-chip", name: "Java Chip Frappuccino", price: 599.90, image: "./Assets/javachipfrap.PNG", description: "Blended mocha sauce and Frappuccino® chips with coffee and milk and ice, then top with whipped cream and mocha drizzle." },
    { id: "vanilla-latte", name: "Vanilla Latte", price: 299.09, image: "./Assets/vannilalatte.png", description: "Delightful combination of a shot of espresso, frothed milk, and vanilla syrup." },
    { id: "hot-choco", name: "HotChoco", price: 499.05, image: "./Assets/hotchoco.png", description: "Decadent winter beverage combining steamed milk with rich dark chocolate sauce." },
    { id: "caramel-cluster", name: "Caramel Choco Cluster", price: 439.77, image: "./Assets/caramel.png", description: "A blend of toffee nut syrup, Frappuccino Roast Coffee, milk and ice topped with dark caramel sauce" },
    { id: "cold-brew", name: "Cold Brew", price: 299.88, image: "./Assets/coldbrew.png", description: "Cold Brew steeped long and cold for a super-smooth flavor." },
    { id: "cluster-frap", name: "Cluster Frappuccino", price: 569.11, image: "./Assets/frappuccino.png", description: "Toffee nut syrup blended with coffee then topped with caramel sauce, whipped cream and mocha drizzle." },
  ];

  return (
    <>
      <div className="Explore" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "120px" }}>
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
