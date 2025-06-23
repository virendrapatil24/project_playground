import { useEffect, useState } from "react";
import "./base.css";
import axios from "axios";

const ProductsB = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      );
      if (response.data.products) setProducts(response.data.products);
      if (response.data.total) setTotal(response.data.total);
    };

    fetchProducts();
  }, [page]);

  const handlePageChange = (idx) => {
    if (idx >= 1 && idx <= 10) {
      setPage(idx);
    }
  };

  return (
    <div className="container">
      <div className="products__container">
        <h1>Products: {total}</h1>
        {products.length > 0 && (
          <>
            <div className="products__grid">
              {products.map((product) => (
                <div key={product.id}>
                  <h3>{product.title}</h3>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              ))}
            </div>
            <div className="products__pagination">
              <span onClick={() => handlePageChange(page - 1)}>Prev</span>
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={page === index + 1 ? "page__selected" : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
              <span onClick={() => handlePageChange(page + 1)}>Next</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsB;
