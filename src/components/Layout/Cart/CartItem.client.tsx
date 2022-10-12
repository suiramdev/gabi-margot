import React from "react";
import {
  CartLineImage,
  CartLinePrice,
  CartLineProductTitle,
  useCart,
  useCartLine,
} from "@shopify/hydrogen";
import { Cross } from "../../Icons.client";

function CartItem() {
  const { linesRemove } = useCart();
  const { id } = useCartLine();

  return (
    <div className="flex gap-4">
      <CartLineImage
        width={75}
        height={75}
        className="object-cover drop-shadow-md"
      />
      <div className="flex-1 grid grid-cols-[auto_auto]">
        <CartLineProductTitle className="text-xl font-serif break-all" />
        <div className="relative">
          <button
            type="button"
            className="absolute top-0 right-0 text-lg text-gray-300 hover:text-gray-400"
            onClick={() => linesRemove([id])}
          >
            <Cross />
          </button>
        </div>
        <CartLinePrice className="col-span-2 text-right" />
      </div>
    </div>
  );
}

export default CartItem;
