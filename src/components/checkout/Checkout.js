import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } =
    useContext(GlobalContext);
  const { discount, extraFees, tax } = { discount: 10, extraFees: 50, tax: 5 };
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal + 50 + 5 - (subTotal + 50 + 5) * 0.1);
  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    addItemToOrderList({
      orderId: orders.length + 1,
      buyerId: 1,
      items: [...cart],
      price: total,
      address: "xxxxxx",
      deliveryDate: "10/17/2023",
      isDelivered: false,
    });
    clearCart();
    setIsOrdered(true);
  };
  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Yay! 🚀 Order placed successfully. <Link to="/">Shop more!</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Order Review</h4>
              <span>{cart?.length} items in cart</span>
            </div>
            <div className="custom-row">
              <h4>Coupons</h4>
              <span>Not Available</span>
            </div>
            <div className="custom-row">
              <h4>Checkout Summary</h4>
              <div className="checkout-summary">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>Discount</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Extra Fee</span>
                <span>${extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
            </div>
            <div className="custom-row">
              <h4>Total</h4>
              <span>${total}</span>
            </div>
          </div>
          <button className="item-btn" onClick={handlePay}>
            Pay ${total}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
