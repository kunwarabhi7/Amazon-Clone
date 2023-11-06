const CartPayment = () => {
  return (
    <div className="xl:mx-8 mx-6 mt-12 bg-white pl-8 rounded-md h-40 xl:h-64 xl:w-96 w-64  pt-4">
      <p className="ml-4 text-xl font-semibold pt-8 ">
        Subtotal <span>1 item : 3,000Rs</span>
      </p>
      <button className="ml-4 mt-5 xl:w-48 bg-yellow-400 rounded-lg xl:p-2 p-1 hover:bg-yellow-500 ">
        Proceed to Buy
      </button>
    </div>
  );
};

export default CartPayment;
