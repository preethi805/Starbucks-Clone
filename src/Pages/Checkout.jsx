import React, { useEffect, useState } from "react";
import '../Styles/Checkout.css';
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    const normalized = saved.map((it) => ({ ...it, quantity: it.quantity || 1 }));
    setCartItems(normalized);
  }, []);

  const totalAmount = cartItems.reduce((sum, item) => {
    return sum + (Number(item.price) || 0) * (Number(item.quantity) || 1);
  }, 0);

  function handlePayNow() {
    if (cartItems.length === 0) return alert("Your cart is empty.");
    setIsProcessing(true);

    // simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsConfirmed(true);
      localStorage.removeItem("cart");
      // keep shown totalAmount as paid amount (captured from before clearing)
      setTimeout(() => {
        // after showing confirmation, optionally navigate home or orders
        // navigate("/order-confirmed"); // uncomment if you have separate page
      }, 1200);
    }, 2000);
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <div className="left">
          <h2 className="heading">Checkout</h2>

          {cartItems.length === 0 && !isConfirmed && (
            <div className="empty-check">Your cart is empty. Please add items.</div>
          )}

          {cartItems.length > 0 && !isConfirmed && (
            <>
              <div className="order-summary">
                <h3>Order summary</h3>
                {cartItems.map((it, i) => (
                  <div className="summary-item" key={i}>
                    <div className="s-left">
                      <img src={it.image} alt={it.name} />
                      <div className="s-info">
                        <div className="s-name">{it.name}</div>
                        <div className="s-qty">{it.quantity} × ₹{Number(it.price).toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="s-right">₹{(Number(it.price)*(Number(it.quantity)||1)).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="payment-section">
                <h3>Payment</h3>

                <label className="pay-option">
                  <input type="radio" name="pay" value="upi" checked={selectedPayment === "upi"} onChange={() => setSelectedPayment("upi")} />
                  UPI / Wallet
                </label>

                <label className="pay-option">
                  <input type="radio" name="pay" value="card" checked={selectedPayment === "card"} onChange={() => setSelectedPayment("card")} />
                  Credit / Debit Card
                </label>

                <label className="pay-option">
                  <input type="radio" name="pay" value="cod" checked={selectedPayment === "cod"} onChange={() => setSelectedPayment("cod")} />
                  Cash on Delivery
                </label>

                <div className="amount-row">
                  <span>Amount to pay</span>
                  <span className="pay-amount">₹{totalAmount.toFixed(2)}</span>
                </div>

                <button className="btn pay-now"  onClick={handlePayNow} disabled={isProcessing}>
                  {isProcessing ? "Processing payment..." : selectedPayment === "cod" ? "Place order (COD)" : "Pay Now"}
                </button>
              </div>
            </>
          )}

          {isConfirmed && (
            <div className="confirmed">
              <div className="tick">✅</div>
              <h3>Your order is confirmed!</h3>
              <p>We Are Baking Your Order Now. You Will Be Notified When Your Order is Out for Delivery.</p>
              <div className="paid">
                <div>Amount to Pay</div>
                <div className="paid-amount">₹{totalAmount.toFixed(2)}</div>
              </div>
              <div className="paid-mode">Payment mode: {selectedPayment === "upi" ? "UPI/Wallet" : selectedPayment === "card" ? "Card" : "Cash on Delivery"}</div>
              <div className="confirmed-actions">
                <button  className="btn" onClick={() => navigate("/")}> <h3 style={{marginLeft:"215px",color:"white"}}>Continue shopping</h3></button>
              </div>
            </div>
          )}
        </div>

        <div className="right">
          <div className="order-box">
            <h4>Order Details</h4>
            <div className="order-row">
              <span>Items</span>
              <span>{cartItems.reduce((s, it) => s + (Number(it.quantity)||0), 0)}</span>
            </div>
            <div className="order-row total">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="note">All payments are simulated in this demo.</div>
          </div>
        </div>
      </div>
    </div>
  );
}


