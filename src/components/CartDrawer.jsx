import { useCart } from '../hooks/useCart';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartSubtotal,
    savings,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setIsCartOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setIsCartOpen(false);
  };

  return (
    <div
      className="cart-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div className="cart-drawer">
        <header className="cart-header">
          <h2>Shopping Cart</h2>
          <button
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </header>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1 0 8"/>
              </svg>
              <p>Your cart is empty</p>
              <span>Add some products to get started</span>
            </div>
          ) : (
            <ul className="cart-items" role="list" aria-label="Cart items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    loading="lazy"
                  />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="quantity-control" role="group" aria-label={`Quantity for ${item.name}`}>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M5 12h14"/>
                        </svg>
                      </button>
                      <span className="qty-value" aria-live="polite">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <span className="item-total-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              {savings > 0 && (
                <div className="summary-row savings">
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="shipping-note">Shipping calculated at checkout</p>
            </div>
            <div className="cart-actions">
              <button
                className="btn btn-secondary"
                onClick={clearCart}
                disabled={cartItems.length === 0}
              >
                Clear Cart
              </button>
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}