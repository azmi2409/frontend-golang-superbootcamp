import React from "react";
import { useAuth, useCart } from "../hooks";
import { Navigate, Link } from "react-router-dom";
import { formatCurrencyToIDR, getURL } from "../utils/helper";

const Cart = () => {
  const { cartItem, isEmpty, loading, countTotalPrice, deleteFromCart } =
    useCart();
  const { isLoggedIn } = useAuth();
  const cart = cartItem;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

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
          <tbody className="text-center">
            {loading ? (
              <tr>
                <td className="px-4 py-2" colSpan="5">
                  Loading...
                </td>
              </tr>
            ) : (
              !isEmpty &&
              cart.map((item) => (
                <tr key={item.sku}>
                  <td className="px-4 py-2 flex justify-center items-center w-full">
                    <div className="flex items-center w-full">
                      <img
                        src={getURL(item.image)}
                        alt={item.name}
                        className="w-auto h-32"
                      />
                      <div className="ml-5 text-justify">
                        <div className="text-lg font-semibold">{item.name}</div>
                        <div className="text-sm">{item.sku}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    {formatCurrencyToIDR(item.price)}
                  </td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">
                    {formatCurrencyToIDR(item.price * item.quantity)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
            {isEmpty && !loading && (
              <tr>
                <td className="px-4 py-5 font-bold" colSpan="5">
                  Cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="py-8" />
        <div className="flex justify-between w-full">
          <Link to={"/"} className="font-semibold flex items-center">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Continue Shopping
            </button>
          </Link>
          <div className="flex flex-col border-2 px-5 py-2">
            <div className="text-lg font-semibold">
              Total: {formatCurrencyToIDR(countTotalPrice)}
            </div>
            <div className="text-md mt-5 w-full">
              <Link to={"/checkout"} className="w-full inline-flex">
                <button className="bg-gray-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
