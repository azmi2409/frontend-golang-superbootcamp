import React from "react";

const Cart = () => {
  return (
    <section className="flex items-center h-full p-16">
      <div className="flex flex-col items-center px-5 mx-auto w-full">
        <div className="max-w-md text-center text-3xl font-semibold">
          Shopping Cart
        </div>
        <div className="py-8" />
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default Cart;
