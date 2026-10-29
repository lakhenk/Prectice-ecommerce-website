export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Product categories">
      {categories.map(category => (
        <button
          key={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}