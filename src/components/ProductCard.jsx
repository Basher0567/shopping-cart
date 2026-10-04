import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
        />
      </Link>

      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          <h3>{product.title}</h3>
        </Link>

        <h4>
          ${product.price.toFixed(2)}
        </h4>

        <button
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;