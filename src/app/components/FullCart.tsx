import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../store/CartSlice";

interface item {
  brand: string;
  image: string;
  category: string;
  description: string;
  price: number;
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  quantity: number;
}

interface cartProduct {
  data: item;
}

const FullCart = ({ data }: cartProduct) => {
  const dispatch = useDispatch();

  const {
    _id,
    brand,
    category,
    description,
    image,
    isNew,
    oldPrice,
    price,
    title,
    quantity,
  } = data;
  return (
    <div
      key={_id}
      className="bg-white m-8 mt-0 flex items-center justify-center"
    >
      <div>
        <Image src={image} alt={title} height={200} width={200} />
      </div>
      <div>
        <p className="text-2xl font-semibold ">{title}</p>
        <div className="flex items-center justify-between p-1 px-2">
          <p className="font-bold ">${price}</p>
          <p className="font-semibold">{brand}</p>
        </div>
        <div className="font-semibold text-xl rounded-full bg-cyan-400 flex items-center justify-center space-x-5 p-1 mt-2">
          <button
            onClick={() =>
              dispatch(
                decreaseQuantity({
                  _id,
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
            -
          </button>
          <span className="text-white">{quantity}</span>
          <button
            onClick={() =>
              dispatch(
                increaseQuantity({
                  _id,
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
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(removeItemFromCart(_id))}
          className="text-blue-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FullCart;
