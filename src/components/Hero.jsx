export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-badge">New Collection 2024</div>
        <h1 id="hero-title" className="hero-title">
          Discover Amazing <span className="highlight">Products</span> at Great Prices
        </h1>
        <p className="hero-description">
          Shop the latest trends in electronics, fashion, and sports gear.
          Free shipping on orders over $50. Easy 30-day returns.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
          <a href="#categories" className="btn btn-secondary btn-lg">Browse Categories</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">50k+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">30</span>
            <span className="stat-label">Day Returns</span>
          </div>
          <div className="stat">
            <span className="stat-number">Free</span>
            <span className="stat-label">Shipping $50+</span>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="floating-cards">
          <div className="float-card card-1">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1 0 8"/>
            </svg>
          </div>
          <div className="float-card card-2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="float-card card-3">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}