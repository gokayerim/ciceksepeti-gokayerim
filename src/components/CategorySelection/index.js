import { useEffect, useState } from "react";
import { useProductContext } from "../../utils/hooks/useProductContext";
import Button from "../Button";
import { secondary } from "../Button/styles/use";

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
    <div>
      <Button
        use={!category ? "primary" : "secondary"}
        addOn="pill"
        size="large"
        onClick={() => handleCategorySelection("")}
      >
        tüm kategoriler
      </Button>
      {categories.map((c) => (
        <Button
          use={category === c ? "primary" : "secondary"}
          addOn="pill"
          size="large"
          key={c}
          onClick={() => handleCategorySelection(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelection;
