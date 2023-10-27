"use client";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Cart = () => {
  const { productData } = useSelector((state: any) => state.cart);
  console.log(productData);
  return (
    <div className="relative hover:border cursor-pointer p-1 py-3">
      <div className=" flex items-center">
        <div className="text-cyan-300">
          <FaOpencart size={25} />
        </div>
        <p>Cart</p>
      </div>
      <div>
        <span className="absolute top-0 left-2 text-orange-500">4</span>
      </div>
    </div>
  );
};

export default Cart;
