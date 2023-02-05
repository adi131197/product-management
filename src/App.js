import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import ProductModal from "./components/Products/ProductModal";
import Products from "./components/Products/Products";
import ProductView from "./components/Products/ProductView";
import data from "./data/products.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: "",
  });

  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    setProducts(data);
  }, []);

  /* Function to add/edit Product */
  const updateProducts = (newProduct) => {
    let newProducts = [...products];
    let index = newProducts.findIndex(
      (product) => product.id === newProduct.id
    );

    // New Product to be added.
    if (index === -1) {
      setProducts([...products, newProduct]);
      alert("New Product added.");
    } else {
      // Already existed Product
      newProducts[index].title = newProduct.title;
      newProducts[index].description = newProduct.description;
      newProducts[index].price = newProduct.price;
      setProducts(newProducts);
      alert("Product Edited.");
    }
  };

  // Function to set the product to be edited.
  const handleEdit = (product) => {
    setEditProduct(product);
  };

  // Function to handle the delete product.
  const handleDelete = (product) => {
    let newProducts = [...products];
    let index = newProducts.findIndex((i) => i.id === product.id);
    newProducts.splice(index, 1);

    setProducts(newProducts);
  };

  // Search Functionality
  const handleSearch = (searchItem) => {
    if (searchItem === "") {
      setProducts(data);
    } else {
      // Filter based on starting with product title
      let newProducts = products.filter((product) => {
        return product.title.match(new RegExp("^" + searchItem, "i"));
      });

      setProducts(newProducts);
    }
  };

  // Function to manipulate the view changes
  const handleViewChange = (view) => {
    if (view === "list") {
      setIsGridView(false);
    } else {
      setIsGridView(true);
    }
  };

  return (
    <>
      <Header />
      <ProductView
        handleSearch={handleSearch}
        handleViewChange={handleViewChange}
      />
      <ProductModal
        product={editProduct}
        products={products}
        updateProducts={updateProducts}
      />
      <Products
        isGridView={isGridView}
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;
