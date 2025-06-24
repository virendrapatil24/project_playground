import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

const ProductsPage = () => {
  const status = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);
  console.log(total);
  return (
    <div>
      <h2>Total Products: {total}</h2>
      {status == "successful" && products.length > 0 && (
        <div className="products__container">
          {products.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
