import "./styles/HomePage.css"
import { NavLink } from 'react-router-dom'
import phones from "./static/2phones.jpg"
import ip17 from "./static/ip17promax-silver.jpeg"
import samsung from "./static/s26ultra-voilet.jpeg"
import xiaomi from "./static/xiaominote15proplus-brown.jpeg"

function HomePage() {
  return (
    <div>
      <main className="hero-container">
        <section className="hero">
          <div className="hero-content">
            <h1>Discover the Future of Mobile</h1>
            <p>Curated performance. Uncompromising design. Explore our collection of the world's most sought-after smartphones.</p>
            <NavLink to="/products" className="btn-primary">Shop All Phones</NavLink>
          </div>
          <div className="hero-image">
            <img src={phones} alt="Flagship Smartphones Showcase" />
            {/* <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80" alt="Flagship Smartphones Showcase" /> */}
          </div>
        </section>
      </main>
      <section className="products-section" id="products">
        <h2 className="section-title">Featured Devices</h2>
        <div className="product-grid">

          <article className="product-card">
            <div>
              <img
                src={ip17}
                alt="iPhone 17 Pro"
              />
            </div>
            <h3>iPhone 17 Pro</h3>
            <p className="product-tagline">Power. Precision. Pro.</p>
            <ul className="specs-list">
              <li>• Apple A19 Pro Chip</li>
              <li>• Advanced Triple-Camera System</li>
              <li>• ProMotion OLED Display</li>
            </ul>
            <div className="product-footer">
              <span className="price">From $999</span>
              <NavLink to="/" className="btn-primary-sm">Add to Cart</NavLink>
            </div>
          </article>

          <article className="product-card">
            <div >
              <img
                src={samsung}
                alt="Samsung Galaxy S26 Ultra"
              />
            </div>
            <h3>Galaxy S26 Ultra</h3>
            <p className="product-tagline">Built for Every Possibility</p>
            <ul className="specs-list">
              <li>• Snapdragon 8 Elite Processor</li>
              <li>• 200MP AI Camera System</li>
              <li>• Integrated S Pen</li>
            </ul>
            <div className="product-footer">
              <span className="price">From $1,299</span>
              <NavLink to="/" className="btn-primary-sm">Add to Cart</NavLink>
            </div>
          </article>

          <article className="product-card">
            <div>
              <img
                src={xiaomi}
                alt="Xiaomi Note 15 Pro+"
              />
            </div>
            <h3>Xiaomi Note 15 Pro+</h3>
            <p className="product-tagline">AI That Works for You</p>
            <ul className="specs-list">
              <li>• Snapdragon 8 Elite</li>
              <li>• Leica Camera System</li>
              <li>• CrystalRes AMOLED Display</li>
            </ul>
            <div className="product-footer">
              <span className="price">From $999</span>
              <NavLink to="/" className="btn-primary-sm">Add to Cart</NavLink>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage