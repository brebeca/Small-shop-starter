import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();

  return <h1>This is product page with title: {params.productID}</h1>;
};
export default ProductPage;
