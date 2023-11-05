const CartPayment = () => {
  return (
    <div className="mx-32 mt-12 bg-white rounded-md h-40 w-64  pt-4">
      <p className="ml-4 text-xl font-semibold">
        Subtotal <span>1 item : 3,000Rs</span>
      </p>
      <button className="ml-4 mt-5 w-48 bg-yellow-400 rounded-lg p-2 hover:bg-yellow-500 ">
        Proceed to Buy
      </button>
    </div>
  );
};

export default CartPayment;
