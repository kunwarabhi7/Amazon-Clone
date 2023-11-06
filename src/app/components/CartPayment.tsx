import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import { useEffect, useState } from "react";
import FormattedPrice from "./FormattedPrice";

const CartPayment = () => {
  const { productData } = useSelector((state: StateProps) => state.cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);
  return (
    <div className="xl:mx-8 mx-6 mt-8  bg-white   rounded-md h-40 xl:h-60 xl:w-96 w-64  pt-8">
      <div className="flex flex-col items-center justify-center ">
        <p className="ml-4 text-xl font-semibold pt-8 ">
          Subtotal{" "}
          <span>
            {productData?.length | 0} item :{" "}
            <FormattedPrice amount={totalAmount} />
          </span>
        </p>
        <button className="ml-4 mt-5 xl:w-48 bg-yellow-400 rounded-lg xl:p-2 p-1 hover:bg-yellow-500 ">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default CartPayment;
