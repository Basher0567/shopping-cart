import useCart from "../hooks/useCart";

const CartSummary = () => {
  const {
    totalItems,
    totalPrice
  } = useCart();

  return (
    <div className="cart-summary">

      <h2>Cart Summary</h2>

      <p>
        Total Items:
        <strong>{totalItems}</strong>
      </p>

      <p>
        Total Price:
        <strong>
          ${totalPrice.toFixed(2)}
        </strong>
      </p>

      <button className="checkout-btn">
        Checkout
      </button>

    </div>
  );
};

export default CartSummary;