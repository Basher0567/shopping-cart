import { useParams } from "react-router-dom";
import products from "../data/products";
import useCart from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <section className="product-details">

      <div className="details-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="details-info">

        <p className="category">
          {product.category}
        </p>

        <h1>{product.title}</h1>

        <h2>
          ${product.price.toFixed(2)}
        </h2>

        <p className="description">
          This is a high-quality {product.title}.
          It is designed to provide excellent
          performance and value.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="add-details-btn"
        >
          Add to Cart
        </button>

      </div>

    </section>
  );
};

export default ProductDetails;