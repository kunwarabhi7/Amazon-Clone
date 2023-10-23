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
    <div className=" grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {ProductsData.map((product: ProductProps) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
