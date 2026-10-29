import ProductCard from './ProductCard';

export default function ProductList({ products, title = null }) {
  if (!products || products.length === 0) {
    return (
      <div className="products-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <p>No products found</p>
        <span>Try adjusting your search or filter</span>
      </div>
    );
  }

  return (
    <section className="product-section" aria-labelledby={title ? 'section-title' : undefined}>
      {title && <h2 id="section-title" className="section-title">{title}</h2>}
      <div className="products-grid" role="list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}