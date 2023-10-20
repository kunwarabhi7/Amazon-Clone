const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

const Products = async () => {
  const ProductsData = await getProducts();
  console.log(ProductsData);
  return (
    <div>
      {ProductsData.map((product: any) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
};

export default Products;
