import "./Filters.css";

const Filters = ({ products, setSelectedCategory }) => {
  const allCategories = products.map((product) => product.category);
  const setCategories = new Set(allCategories);
  const arrayCategories = [...setCategories];

  const categories = arrayCategories.map((category) => (
    <div key={category} className="category">
      <button
        className="filter-btn"
        onClick={() => {
          setSelectedCategory(category);
        }}
      >
        {category}
      </button>
    </div>
  ));

  return (
    <div className="filters">
      <div>
        <h4>Choose a category:</h4>
        {categories}
      </div>
    </div>
  );
};

export default Filters;
