import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Cart.css'; // separate cart styles (provided below)

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // load + normalize cart on mount
  useEffect(() => {
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem("cart")) || [];
      if (!Array.isArray(saved)) saved = [];
    } catch (e) {
      saved = [];
    }

    // Normalize: ensure each item has `image` and numeric quantity
    const normalized = saved.map((it) => {
      const image = it.image || it.img || it.src || "/images/placeholder.png";
      const quantity = Math.max(1, Number(it.quantity) || 1);
      return { ...it, image, quantity };
    });

    // Save normalized back so future loads are consistent
    try {
      localStorage.setItem("cart", JSON.stringify(normalized));
    } catch (e) {
      // ignore
    }
    setCartItems(normalized);
  }, []);

  // keep localStorage in sync with state
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (e) {
      // ignore
    }
  }, [cartItems]);

  function updateQuantity(idx, delta) {
    setCartItems((prev) => {
      const copy = [...prev];
      if (!copy[idx]) return prev;
      const q = Math.max(1, (Number(copy[idx].quantity) || 1) + delta);
      copy[idx] = { ...copy[idx], quantity: q };
      return copy;
    });
  }

  function removeItem(idx) {
    setCartItems((prev) => {
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
  }

  const total = cartItems.reduce(
    (s, it) => s + (Number(it.price) || 0) * (Number(it.quantity) || 1),
    0
  );

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>

        <div className="layout">
          {/* LEFT: items */}
          <div className="left">
            {cartItems.length === 0 ? (
              <div className="empty-card">
                <p className="empty-text">Your cart is empty.</p>
                <div className="empty-actions">
                  <button className="btn" onClick={() => navigate("/")}><h3 style={{marginLeft:"212px"}}>Go shopping</h3></button>
                </div>
              </div>
            ) : (
              <div className="items-card">
                {cartItems.map((item, idx) => (
                  <div className="cart-item" key={item.id ?? idx}>
                    <div className="item-left">
                      <div className="img-wrap">
                        <img
                          src={item.image || "/images/placeholder.png"}
                          alt={item.name}
                          onError={(e) => { e.currentTarget.src = "/images/placeholder.png"; }}
                        />
                      </div>
                      <div className="meta">
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">₹{Number(item.price || 0).toFixed(2)}</div>
                        <div className="small">Each</div>
                      </div>
                    </div>

                    <div className="item-center">
                      <div className="qty-control">
                        <button className="qty-btn" onClick={() => updateQuantity(idx, -1)}>-</button>
                        <div className="qty">{item.quantity}</div>
                        <button className="qty-btn" onClick={() => updateQuantity(idx, 1)}>+</button>
                      </div>
                    </div>

                    <div className="item-right">
                      <div className="line-total">₹{(Number(item.price || 0) * (Number(item.quantity)||1)).toFixed(2)}</div>
                      <button className="remove" onClick={() => removeItem(idx)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: summary */}
          <aside className="right">
            <div className="summary-card">
              <div className="summary-row">
                <div>Items</div>
                <div>{cartItems.reduce((s, it) => s + (Number(it.quantity)||0), 0)}</div>
              </div>

              <div className="summary-row total">
                <div>Total</div>
                <div>₹{total.toFixed(2)}</div>
              </div>

              <button 
                className="btn pay"
                onClick={() => navigate("/checkout")}
                disabled={cartItems.length === 0}
              >
                <h3 style={{marginLeft:"55px"}}>Proceed to pay</h3>
              </button>

              <div className="note">Secure payments • Easy returns</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

