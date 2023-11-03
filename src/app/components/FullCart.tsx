import Image from "next/image";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../store/CartSlice";

const FullCart = ({ data }: any) => {
  const dispatch = useDispatch();

  const { brand, image, price, quantity, title, _id } = data;
  return (
    <div
      key={data._id}
      className="bg-white m-8 flex items-center justify-center"
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
          <button onClick={() => dispatch(decreaseQuantity(_id))}>-</button>
          <span className="text-white">{quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(_id))}>+</button>
        </div>
        <button className="text-blue-400">Deletee</button>
      </div>
    </div>
  );
};

export default FullCart;
