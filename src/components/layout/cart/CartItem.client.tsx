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
import { CloseIcon, FrameIcon } from "../../elements/Icon";

function CartItem() {
  const { linesRemove } = useCart();
  const { id, merchandise } = useCartLine();

  return (
    <div className="flex gap-4">
      {merchandise.image ? (
        <CartLineImage width={75} height={75} className="object-cover" />
      ) : (
        <div className="relative w-[75px] h-[75px] bg-gray-200">
          <FrameIcon
            size="md"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-gray-300"
          />
        </div>
      )}
      <div className="flex-1 grid grid-cols-[auto_auto]">
        <CartLineProductTitle className="text-xl font-serif break-all" />
        <div className="relative">
          <button
            type="button"
            className="absolute top-0 right-0 text-gray-300 hover:text-gray-400"
            onClick={() => linesRemove([id])}
            aria-label="Enlever le produit du panier"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-end">
          <div className="w-fit flex border border-gray-300 rounded-md">
            <CartLineQuantityAdjustButton
              className="px-2 hover:bg-default-100"
              adjust="decrease"
              aria-label="Diminuer la quantité"
            >
              -
            </CartLineQuantityAdjustButton>
            <CartLineQuantity className="px-2 text-center border-l border-r border-gray-300" />
            <CartLineQuantityAdjustButton
              className="px-2 hover:bg-default-100"
              adjust="increase"
              aria-label="Augmenter la quantité"
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
