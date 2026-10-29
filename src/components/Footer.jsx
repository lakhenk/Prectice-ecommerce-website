export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Products', href: '#products' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Sale', href: '#' },
      { label: 'Gift Cards', href: '#' }
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Track Order', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Affiliates', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' }
    ]
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo" aria-label="ShopHome Home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="currentColor"/>
              <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span>ShopHome</span>
          </a>
          <p className="footer-tagline">
            Your trusted online marketplace for quality products at unbeatable prices.
          </p>
          <div className="social-links" role="list" aria-label="Social media links">
            <a href="#" className="social-link" aria-label="Facebook" role="listitem">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter" role="listitem">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram" role="listitem">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="YouTube" role="listitem">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              {footerLinks.shop.map((link, i) => (
                <li key={i}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              {footerLinks.support.map((link, i) => (
                <li key={i}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link, i) => (
                <li key={i}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((link, i) => (
                <li key={i}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for exclusive offers and updates</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="visually-hidden">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="newsletter-note">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} ShopHome. All rights reserved.</p>
        <div className="payment-methods" aria-label="Accepted payment methods">
          <svg width="40" height="24" viewBox="0 0 60 36" fill="none" aria-hidden="true">
            <path d="M0 18c0-9.9 8.1-18 18-18h24c9.9 0 18 8.1 18 18v0c0 9.9-8.1 18-18 18H18c-9.9 0-18-8.1-18-18z" stroke="currentColor" strokeWidth="1.5"/>
            <text x="30" y="22" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="system-ui">VISA</text>
          </svg>
          <svg width="40" height="24" viewBox="0 0 60 36" fill="none" aria-hidden="true">
            <path d="M0 18c0-9.9 8.1-18 18-18h24c9.9 0 18 8.1 18 18v0c0 9.9-8.1 18-18 18H18c-9.9 0-18-8.1-18-18z" stroke="currentColor" strokeWidth="1.5"/>
            <text x="30" y="22" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="system-ui">MC</text>
          </svg>
          <svg width="40" height="24" viewBox="0 0 60 36" fill="none" aria-hidden="true">
            <path d="M0 18c0-9.9 8.1-18 18-18h24c9.9 0 18 8.1 18 18v0c0 9.9-8.1 18-18 18H18c-9.9 0-18-8.1-18-18z" stroke="currentColor" strokeWidth="1.5"/>
            <text x="30" y="22" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="system-ui">AMEX</text>
          </svg>
          <svg width="40" height="24" viewBox="0 0 60 36" fill="none" aria-hidden="true">
            <path d="M0 18c0-9.9 8.1-18 18-18h24c9.9 0 18 8.1 18 18v0c0 9.9-8.1 18-18 18H18c-9.9 0-18-8.1-18-18z" stroke="currentColor" strokeWidth="1.5"/>
            <text x="30" y="22" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="system-ui">PayPal</text>
          </svg>
        </div>
      </div>
    </footer>
  );
}