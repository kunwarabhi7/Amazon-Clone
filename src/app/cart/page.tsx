"use client";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import FullCart from "../components/FullCart";
import { StateProps } from "../../../type";
import ResetCart from "../components/ResetCart";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.cart);
  if (productData.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div>
      <p>Shopping Cart</p>
      <hr />
      {productData.map((data: any) => (
        <FullCart key={data._id} data={data} />
      ))}
      <ResetCart />
    </div>
  );
};

export default Cart;
