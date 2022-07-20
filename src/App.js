import { useEffect } from "react";
import Catalog from "./components/Catalog";
import CategorySelection from "./components/CategorySelection";
import Layout from "./layout";
import { useProductContext } from "./utils/hooks/useProductContext";

function App() {
  const { dispatch } = useProductContext();

  function handleWindowSizeChange() {
    dispatch({ type: "SET_MOBILE", payload: window?.innerWidth <= 768 });
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <Layout>
      <CategorySelection />
      <Catalog />
    </Layout>
  );
}

export default App;
