import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styles/Readytoeat.css';

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
    { id: "luxe-bean", name: "LuxeBean Delights", price: 1449.49, image: "./Assets/chocoone.png", description: "A luxurious assortment of premium coffee beans coated in rich chocolate." },
    { id: "caramel-crown", name: "Caramel Crown Truffle", price: 1099.60, image: "./Assets/chocotwo.png", description: "Rich chocolate spheres filled with silky caramel." },
    { id: "nutty-bliss", name: "Nutty Bliss Truffle Bowl", price: 1699.90, image: "./Assets/cocothree.png", description: "Handcrafted truffles rolled in crunchy nuts and cocoa." },
    { id: "choconuts-cubes", name: "ChocoNuts Cubes", price: 1609.80, image: "./Assets/chocofour.png", description: "Smooth milk chocolate cubes with crunchy roasted nuts." },
    { id: "royal-praline", name: "Royal Assortment Praline Box", price: 1099.09, image: "./Assets/assortedbox.png", description: "A luxurious selection of handcrafted chocolate pralines." },
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
