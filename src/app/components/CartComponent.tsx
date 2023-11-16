"use client";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import FullCart from "../components/FullCart";
import { StateProps } from "../../../type";
import ResetCart from "../components/ResetCart";
import CartPayment from "../components/CartPayment";

const CartComponent = () => {
  const { productData } = useSelector((state: StateProps) => state.cart);
  if (productData.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div>
      <p className="text-3xl font-semibold m-8 mb-0  bg-white p-2 md:mr-[334px] xl:mr-[480px]">
        Shopping Cart
      </p>
      <hr className="xl:w-[480px] w-80" />
      <div className="flex ">
        <div className="flex-grow">
          {productData.map((data: any) => (
            <FullCart key={data._id} data={data} />
          ))}
          <ResetCart />
        </div>
        <div className="">
          <CartPayment />
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
