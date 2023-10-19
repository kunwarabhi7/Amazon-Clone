import { FaOpencart } from "react-icons/fa";
const Cart = () => {
  return (
    <div className="relative">
      <div className="text-cyan-300">
        <FaOpencart size={25} />
      </div>
      <span className="absolute -top-3 left-2 text-orange-500">4</span>
    </div>
  );
};

export default Cart;
