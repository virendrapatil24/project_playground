import { useEffect, useState } from "react";
import "./base.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;
  const TOTAL_PAGES = Math.ceil(total / PAGE_SIZE);
  console.log;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=500"
      );
      if (response.data.products) setProducts(response.data.products);
      if (response.data.total) setTotal(response.data.total);
    };

    fetchProducts();
  }, []);

  const handlePageChange = (idx) => {
    if (idx >= 1 && idx <= TOTAL_PAGES) {
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
              {products
                .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
                .map((product) => (
                  <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title} />
                  </div>
                ))}
            </div>
            <div className="products__pagination">
              <span
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
              >
                Prev
              </span>
              {[...Array(TOTAL_PAGES)].map((_, index) => (
                <span
                  key={index}
                  className={page === index + 1 ? "page__selected" : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
              <span
                disabled={page === TOTAL_PAGES}
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </span>
            </div>
            {/* <div className="products__pagination">
              <span onClick={() => handlePageChange(page - 1)}>Prev</span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className={index === 0 ? "page__selected" : ""}
                  onClick={() => handlePageChange(page + index)}
                >
                  {page + index}
                </span>
              ))}
              <span onClick={() => handlePageChange(page + 1)}>Next</span>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
