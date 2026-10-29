const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    title: 'Free Shipping',
    description: 'On all orders over $50'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12V7H5V6H4l2 9h13v-4z"/>
        <path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2"/>
      </svg>
    ),
    title: '30-Day Returns',
    description: 'Hassle-free return policy'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="9" x2="23" y2="9"/>
      </svg>
    ),
    title: 'Secure Payment',
    description: '100% secure checkout'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12V7H5V6H4l2 9h13v-4z"/>
        <circle cx="8.5" cy="17.5" r="1.5"/>
        <circle cx="18.5" cy="17.5" r="1.5"/>
      </svg>
    ),
    title: '24/7 Support',
    description: 'Dedicated customer service'
  }
];

export default function Features() {
  return (
    <section className="features" aria-labelledby="features-title">
      <h2 id="features-title" className="visually-hidden">Why Shop With Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <article key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}