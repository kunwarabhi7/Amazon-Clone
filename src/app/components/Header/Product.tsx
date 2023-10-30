"use client";
import Image from "next/image";
import { BiSolidCart } from "react-icons/bi";
import { BsChatSquareHeartFill } from "react-icons/bs";
import FormattedPrice from "../FormattedPrice";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToFavorite,
} from "@/app/store/CartSlice";
import { ProductProps } from "../../../../type";
const Product = ({ product }: any) => {
  const dispatch = useDispatch();
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
  }: ProductProps = product;

  // const handleAdd = () => {
  //   dispatch(
  //     addItemToCart({
  //       id,
  //       title,
  //       isNew,
  //       oldPrice,
  //       price,
  //       description,
  //       category,
  //       image,
  //       brand,
  //       quantity: 1,
  //     })
  //   );
  // };
  const handleRemove = () => {
    dispatch(removeItemFromCart(id));
  };
  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-lg w-full p-4 border border-x-gray-300 group overflow-hidden"
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover scale-90 hover:scale-100  duration-300"
        />
        <div className="absolute top-20 -right-20 flex flex-col  group-hover:left-[440px] :group-hover:left-[440px]  md:group-hover:left-[280px] mdl:group-hover:left-[240px] lgl:group-hover:left-[200px] xl:group-hover:left-[340px] duration-300">
          <span
            className="text-cyan-300 cursor-pointer"
            onClick={() =>
              dispatch(
                addItemToCart({
                  id,
                  brand,
                  category,
                  description,
                  image,
                  isNew,
                  oldPrice,
                  price,
                  title,
                  quantity: 1,
                })
              )
            }
          >
            <BiSolidCart size={30} />
          </span>
          <span
            className="h-12 w-12 text-red-500 cursor-pointer"
            onClick={() =>
              dispatch(
                addToFavorite({
                  id,
                  brand,
                  category,
                  description,
                  image,
                  isNew,
                  oldPrice,
                  price,
                  title,
                  quantity: 1,
                })
              )
            }
          >
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
      <div className="px-4 py-3 flex flex-col gap-1 ">
        <p className="text-gray-600 tracking-wide">{category}</p>
        <p className="my-2 text-xl font-bold ">{title}</p>
        <div className="flex items-center space-x-8">
          <p className="line-through">${oldPrice}</p>
          <p className="font-bold">${price}</p>
        </div>
        <p className="text-sm text-justify">{description.substring(0, 120)}</p>
        <button
          onClick={() =>
            dispatch(
              addItemToCart({
                id: id,
                brand: brand,
                category: category,
                description: description,
                image: image,
                isNew: isNew,
                oldPrice: oldPrice,
                price: price,
                title: title,
                quantity: 1,
              })
            )
          }
          className="bg-black h-10  text-white w-full rounded-full mx-2 mt-4 p-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
