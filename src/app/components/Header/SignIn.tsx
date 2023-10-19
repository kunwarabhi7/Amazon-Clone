import { BiSolidDownArrow } from "react-icons/bi";
const SignIn = () => {
  return (
    <div>
      <div className="flex">
        <p>Hello,</p>
        <p>sign in</p>
      </div>
      <div className="flex items-center">
        <p>Account & Lists</p>
        <BiSolidDownArrow />
      </div>
    </div>
  );
};

export default SignIn;
