import { useEffect, useState } from "react";
import { useProductContext } from "../../utils/hooks/useProductContext";
import { StyledCatalogButton, StyledCategorySelectionWrapper } from "./styles";

const CategorySelection = () => {
  const [categories, setCategories] = useState([]);
  const {
    state: { products, category },
    dispatch,
  } = useProductContext();

  useEffect(() => {
    const set = new Set();
    products.forEach((product) => {
      set.add(product.category);
    });
    setCategories([...set]);
  }, [products]);

  const handleCategorySelection = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  return (
    <StyledCategorySelectionWrapper>
      <StyledCatalogButton
        use={!category ? "primary" : "secondary"}
        addOn="normal"
        size="large"
        onClick={() => handleCategorySelection("")}
      >
        Tüm Kategoriler
      </StyledCatalogButton>
      {categories.map((c) => (
        <StyledCatalogButton
          use={category === c ? "primary" : "secondary"}
          addOn="normal"
          size="large"
          key={c}
          onClick={() => handleCategorySelection(c)}
        >
          {c}
        </StyledCatalogButton>
      ))}
    </StyledCategorySelectionWrapper>
  );
};

export default CategorySelection;
