import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
import flag from "../../assets/india.png";
const Languages = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image src={flag} alt="India" width={20} height={20} />
      </div>
      <div>
        <p>En</p>
      </div>
      <div>
        <BiSolidDownArrow />
      </div>
    </div>
  );
};

export default Languages;
