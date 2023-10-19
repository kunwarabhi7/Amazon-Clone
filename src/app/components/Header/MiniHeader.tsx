/* eslint-disable react/no-unescaped-entities */
import { FiMenu } from "react-icons/fi";
import { AiOutlineCaretDown } from "react-icons/ai";
const MiniHeader = () => {
  return (
    <div className="flex items-center  gap-x-4   bg-[#232F3E] text-white">
      <div className="flex items-center">
        <FiMenu />
        All
      </div>
      <div className="hidden md:inline-block">Amazon miniTV</div>
      <div className="hidden md:inline-block">Sell</div>
      <div className="hidden md:inline-block">Today's Deal</div>
      <div className="hidden md:inline-block">Best Sellers</div>
      <div className="hidden xl:inline-block">Mobiles</div>
      <div className="hidden xl:inline-block">Electronics</div>
      <div className="hidden xl:inline-block">Customer Services</div>
      <div className="md:flex items-center hidden">
        Prime <AiOutlineCaretDown />{" "}
      </div>
      <div className="hidden xl:inline-block">New Releases</div>
      <div className="hidden xl:inline-block">Gift Ideas</div>
      <div className="hidden xl:inline-block"> Home Kitchen</div>
      <div className="hidden xl:inline-block">Fashions</div>
    </div>
  );
};

export default MiniHeader;
