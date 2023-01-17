import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

// const thtme = new me()
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  
  // console.log(thtme.getQuantity(),'ertyuiophgfdfghjklkjhgh');
  
  // const quantity = getItemQuantity(id);
  // console.log(getItemQuantity(id))
  return (
    <>
      <div className="max-w-sm rounded h-full w-full overflow-hidden  object-cover shadow-lg">
        <img
          src={imgUrl}
          alt="images"
          className="h-[360px] object-cover"
          style={{ objectFit: "cover" }}
        />
        <div className="px-6 py-4">
          <div className="flex justify-between align-middle mr-4 mb-4 text-lg">
            <span>{name}</span>
            <span>{formatCurrency(price)}</span>
          </div>
          <div className="mt-auto">
            {quantity === 0 ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white
                         font-bold py-2 px-4 w-full rounded"
                onClick={() => increaseCartQuantity(id)}
              >
                + Add to Cart
              </button>
            ) : (
              <div className="flex items-center flex-col gap-2">
                <div className="flex gap-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white  px-3 py-2 rounded-lg font-medium text-xl"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </button>
                  <div>
                    <span className="text-2xl">{quantity}</span> in cart
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white  px-3 py-2 
                            rounded-lg font-medium text-xl"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </button>
                </div>
                <button
                  className="flex rounded-xl bg-red-500 hover:bg-red-700 px-4 py-2 mt-5 text-white 
                            items-center justify-center gap-2"
                  onClick={() => removeFromCart(id)}
                >
                  remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
