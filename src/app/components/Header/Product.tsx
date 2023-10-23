import Image from "next/image";
import { BiSolidCart } from "react-icons/bi";
import { BsChatSquareHeartFill } from "react-icons/bs";
import FormattedPrice from "../FormattedPrice";
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

  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-lg w-full p-4 border border-x-gray-300 group mx-4 overflow-hidden"
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover scale-90 hover:scale-100  duration-300"
        />
        <div className="absolute top-20 -right-20 flex flex-col  group-hover:left-[310px] duration-300">
          <span className="text-cyan-300 cursor-pointer">
            <BiSolidCart size={30} />
          </span>
          <span className="h-12 w-12 text-red-500 cursor-pointer">
            <BsChatSquareHeartFill size={30} />
          </span>
        </div>
        {isNew && (
          <p className=" absolute top-0 right-1 text-cyan-600 font-medium text-xs  animate-bounce">
            !save <FormattedPrice amount={oldPrice - price} />
          </p>
        )}
      </div>
      <hr />
      <div className="p-2 px-4">
        <p className="text-gray-600">{category}</p>
        <p className="my-2 text-xl font-bold">{title}</p>
        <div className="flex items-center space-x-8">
          <p className="line-through">${oldPrice}</p>
          <p className="font-bold">${price}</p>
        </div>
        <p className="text-sm text-justify">{description}</p>
        <button className="bg-black text-white w-full rounded-full mx-2 mt-4 p-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
