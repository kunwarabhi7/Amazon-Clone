import Image from "next/image";
import BackToTopButton from "./BackToTop";
import logo from "../assets/logo.png";
import flag from "../assets/india.png";

const Footer = () => {
  return (
    <div className="bg-[#232F3E] fixed bottom-0 left-0 right-0 z-50">
      <BackToTopButton />
      <div className="flex items-center justify-center p-2 space-x-4 m-4 ">
        <Image src={logo} alt="logo" width={70} height={70} />
        <Image src={flag} alt="logo" width={40} height={40} />
      </div>
    </div>
  );
};

export default Footer;
