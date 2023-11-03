import Image from "next/image";
import Ecart from "../assets/ecart.svg";

const EmptyCart = () => {
  return (
    <div className="flex   mb-[130px] m-12  md:mr-8 xl:mr-40 mr-4 bg-white">
      <Image
        src={Ecart}
        alt="EmptyCart"
        height={400}
        width={400}
        className="w-40 h-40 md:w-64 md:h-64 xl:w-96 xl:h-96"
      />
      <div className="mx-8 mt-12">
        <p className="font-bold text-2xl">Your Amazon Cart is empty</p>
        <p className="text-blue-500 hover:underline cursor-pointer">
          Shop today’s deals
        </p>
        <div className="flex space-x-4  my-6">
          <button className="bg-yellow-300 rounded-xl p-2 px-3 font-semibold">
            Sign in to your account
          </button>
          <button className="border-2 rounded-xl  p-2 px-3">Sign up now</button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
