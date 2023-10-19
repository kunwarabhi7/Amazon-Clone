import { HiOutlineLocationMarker } from "react-icons/hi";
const Address = () => {
  return (
    <div className="hover:border cursor-pointer">
      <p>Hello</p>
      <div className="flex items-center">
        <HiOutlineLocationMarker />
        <p>Select your address</p>
      </div>
    </div>
  );
};

export default Address;
