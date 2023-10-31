"use client";
import { useSelector } from "react-redux";

const Returns = () => {
  const { favoriteData } = useSelector((state: any) => state.cart);
  return (
    <div className="relative">
      <div className="  hover:border cursor-pointer hidden xl:flex xl:flex-col">
        <span>Returns</span>
        <span>& Orders</span>
        <p className="absolute -top-2 left-14 text-cyan-500 ">
          {favoriteData.length > 0 ? favoriteData.length : ""}
        </p>
      </div>
    </div>
  );
};

export default Returns;
