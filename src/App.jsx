import { useState, useMemo, useCallback } from 'react';
import { CartProvider } from './context/CartProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Search from './components/Search';
import CategoryFilter from './components/CategoryFilter';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { products, categories } from './data/products';
import './App.css';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <Features />
        <section className="products-section" id="products" aria-labelledby="products-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="products-heading" className="section-title">All Products</h2>
              <div className="products-toolbar">
                <Search onSearch={handleSearch} placeholder="Search products..." />
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
            </header>
            <ProductList products={filteredProducts} />
          </div>
        </section>
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">Ready to Shop?</h2>
              <p>Join thousands of satisfied customers and discover amazing deals today.</p>
              <a href="#products" className="btn btn-primary btn-lg">Start Shopping</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;