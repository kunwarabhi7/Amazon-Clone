import { ProductProps } from "../../../../type";
import Product from "./Product";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const products = await res.json();
  return products;
};

const Products = async () => {
  const ProductsData = await getProducts();
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      {ProductsData.map((product: ProductProps) => (
        <Product key={product.id} product={product} />
        // <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
};

export default Products;
