import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import CartComponent from "../components/CartComponent";

const Cart = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/");
  }
  console.log(session);
  return <CartComponent />;
};

export default Cart;
