import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.title}
      />

      <div className="cart-item-info">

        <h3>{item.title}</h3>

        <p>
          ${item.price.toFixed(2)}
        </p>

        <div className="quantity">

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

      </div>
    </div>
  );
};

export default CartItem;