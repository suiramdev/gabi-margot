import React from "react";
import {
  CartLineImage,
  CartLinePrice,
  CartLineProductTitle,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  useCart,
  useCartLine,
} from "@shopify/hydrogen";
import CrossIcon from "../../Icons/CrossIcon.client";

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
            className="absolute top-0 right-0 text-gray-300 hover:text-gray-400"
            onClick={() => linesRemove([id])}
          >
            <CrossIcon width="24" height="24" />
          </button>
        </div>
        <div className="flex items-end">
          <div className="w-fit flex border border-gray-300 rounded-md">
            <CartLineQuantityAdjustButton
              className="px-2 hover:bg-default-100"
              adjust="decrease"
            >
              -
            </CartLineQuantityAdjustButton>
            <CartLineQuantity className="px-2 text-center border-l border-r border-gray-300" />
            <CartLineQuantityAdjustButton
              className="px-2 hover:bg-default-100"
              adjust="increase"
            >
              +
            </CartLineQuantityAdjustButton>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <CartLinePrice className="text-right" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
