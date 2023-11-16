"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { BiSolidDownArrow } from "react-icons/bi";
const SignIn = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session)
    return (
      <div className="cursor-pointer" onClick={() => signOut()}>
        {session.user?.name}
      </div>
    );
  return (
    <div onClick={() => signIn()} className="hover:border cursor-pointer">
      <div className="flex ">
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
