import Catalog from "./components/Catalog";
import CategorySelection from "./components/CategorySelection";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <CategorySelection />
      <Catalog />
    </Layout>
  );
}

export default App;
