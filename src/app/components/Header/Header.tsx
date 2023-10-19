import Image from "next/image";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import Address from "./Address";
import Languages from "./Languages";
import SignIn from "./SignIn";
import Returns from "./Returns";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4  sticky top-0 z-50 bg-black text-white ">
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="hover:border cursor-pointer p-1"
      />

      <Address />

      <SearchBar />

      <Languages />

      <SignIn />

      <Returns />

      <Cart />
    </div>
  );
};

export default Header;
