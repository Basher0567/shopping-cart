import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="hero-small">
            Welcome to ShopCart
          </p>

          <h1>
            Find Everything
            <br />
            You Need
          </h1>

          <p>
            Discover quality products at the best prices.
          </p>

          <button>
            Shop Now
          </button>
        </div>
      </section>

      <ProductGrid />
    </main>
  );
};

export default Home;