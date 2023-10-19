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
    <div className="flex items-center justify-between m-4">
      <Image src={logo} alt="logo" width={100} height={100} />

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
