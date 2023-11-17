"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
const SignIn = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session)
    return (
      <div
        className="cursor-pointer flex items-center px-2 border border-transparent hover:border-white duration-300 gap-1 h-[70%]"
        onClick={() => signOut()}
      >
        <Image
          height={10}
          width={10}
          className="w-10 h-10 rounded-full object-cover"
          src={session.user?.image!}
          alt={session.user?.name!}
        />
        <div>
          <h1>{session.user?.name}</h1>
          <h1>{session.user?.email}</h1>
        </div>
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
