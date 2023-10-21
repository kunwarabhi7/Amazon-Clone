import Image from "next/image";
import { ProductProps } from "../../../../type";

const Product = ({ product }: any) => {
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
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="relative overflow-hidden">
        {isNew && (
          <div className="absolute top-0 left-0 bg-primary text-white py-1 px-3 text-xs font-semibold rounded-tl-md">
            New
          </div>
        )}
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-gray-700 text-sm">{category}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-2">
          {oldPrice && (
            <p className="text-gray-400 text-sm line-through">${oldPrice}</p>
          )}
          <p className="text-xl text-primary font-semibold">${price}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-500 text-sm">{brand}</span>
          <button className="text-primary text-sm font-semibold hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
