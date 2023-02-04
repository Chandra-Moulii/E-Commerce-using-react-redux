import "../../assets/Products.css";

import { useSelector } from "react-redux";

import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state);
  let allProducts = products.map((item) => {
    return <Product key={item.id} props={item} />;
  });
  return (
    <>
      <h1>Our Products</h1>
      <div className="productscontainer">{allProducts}</div>
    </>
  );
};

export default Products;
