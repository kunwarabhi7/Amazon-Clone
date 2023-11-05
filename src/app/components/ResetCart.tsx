import { useDispatch } from "react-redux";
import { resetCart } from "../store/CartSlice";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleClick = (e: any) => {
    e.preventDefault();
    const confirmReset = window.confirm("Are you sure you want to reset");
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handleClick}
      className=" mx-12 p-2 px-3 mb-4 rounded-xl  w-32 hover:bg-red-500  bg-gray-500 text-white"
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
