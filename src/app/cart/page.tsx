"use client";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import FullCart from "../components/FullCart";
import { StateProps } from "../../../type";
import ResetCart from "../components/ResetCart";
import CartPayment from "../components/CartPayment";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.cart);
  if (productData.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div>
      <p>Shopping Cart</p>
      <hr />
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

export default Cart;
