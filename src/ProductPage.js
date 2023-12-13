import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productID}`)
      .then((response) => response.json())
      .then((response2) => setProduct(response2));
  }, [params.productID]);

  return <h1>This is product page with title: {product.title}</h1>;
};
export default ProductPage;
