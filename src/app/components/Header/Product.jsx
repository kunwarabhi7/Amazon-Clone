const Product = ({ product }) => {
  const {
    id,
    title,
    isNew,
    oldPrice,
    price,
    description,
    category,
    image,
    brand,
  } = product;
  console.log(product);
  return <div className="">{brand}</div>;
};

export default Product;
