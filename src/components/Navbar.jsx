import { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';

export default function Navbar() {
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container" role="navigation" aria-label="Main navigation">
        <a href="/" className="navbar-brand" aria-label="ShopHome Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="currentColor"/>
            <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>ShopHome</span>
        </a>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links" role="menubar">
            <li role="none"><a href="#home" role="menuitem" onClick={closeMobileMenu}>Home</a></li>
            <li role="none"><a href="#products" role="menuitem" onClick={closeMobileMenu}>Products</a></li>
            <li role="none"><a href="#categories" role="menuitem" onClick={closeMobileMenu}>Categories</a></li>
            <li role="none"><a href="#about" role="menuitem" onClick={closeMobileMenu}>About</a></li>
            <li role="none"><a href="#contact" role="menuitem" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button
            className="cart-button"
            onClick={toggleCart}
            aria-label={isCartOpen ? 'Close cart' : `Open cart, ${cartCount} items`}
            aria-expanded={isCartOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1 0 8"/>
            </svg>
            {cartCount > 0 && (
              <span className="cart-badge" aria-live="polite">{cartCount}</span>
            )}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="navbar-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}