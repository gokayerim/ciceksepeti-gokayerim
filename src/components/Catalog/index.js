import { useEffect, useState } from "react";
import { useProductContext } from "../../utils/hooks/useProductContext";
import Product from "../Product";
import { StyledCatalog, StyledNoProductTitle } from "./styles";

const Catalog = () => {
  const {
    state: { products, searchTerm, category },
  } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products
        ?.filter((product) => {
          if (category) {
            return product.category === category;
          }
          return true;
        })
        .filter((product) => {
          if (searchTerm) {
            return product.title.toLowerCase().includes(searchTerm);
          }
          return true;
        })
    );
  }, [searchTerm, products, category]);

  return (
    <StyledCatalog>
      {filteredProducts.length ? (
        filteredProducts?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        ))
      ) : (
        <StyledNoProductTitle>Ürün Bulunamadı.</StyledNoProductTitle>
      )}
    </StyledCatalog>
  );
};

export default Catalog;
