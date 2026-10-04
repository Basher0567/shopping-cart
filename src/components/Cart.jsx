import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cart } = useCart();

  return (
    <section className="cart-section">

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <CartSummary />
        </>
      )}

    </section>
  );
};

export default Cart;