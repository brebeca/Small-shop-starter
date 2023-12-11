import "./Filters.css";

const Filters = ({ products }) => {
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].map((category) => (
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
