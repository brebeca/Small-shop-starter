import "./Filters.css";

// {1,2,3,9}
const Filters = ({ products }) => {
  const allCategories = products.map((product) => product.category);
  const setCategories = new Set(allCategories);
  const arrayCategories = [...setCategories];

  const categories = arrayCategories.map((category) => (
    <div key={category} className="category">
      <button className="filter-btn">{category}</button>
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
