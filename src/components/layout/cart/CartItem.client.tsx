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
import CloseIcon from "../../icons/CloseIcon";

function CartItem() {
    const { linesRemove } = useCart();
    const { id, merchandise } = useCartLine();

    return (
        <div className="flex gap-4">
            {merchandise.image ? (
                <CartLineImage width={75} height={75} className="object-cover" />
            ) : (
                <div className="relative w-[75px] h-[75px] bg-black" />
            )}
            <div className="flex-1 grid grid-cols-[auto_auto]">
                <CartLineProductTitle className="text-xl font-serif break-all" />
                <div className="relative">
                    <button
                        type="button"
                        className="absolute top-0 right-0 text-stone-400 hover:text-stone-500"
                        onClick={() => linesRemove([id])}
                        aria-label="Enlever le produit du panier"
                    >
                        <CloseIcon size={24} />
                    </button>
                </div>
                <div className="flex items-end">
                    <div className="w-fit flex text-stone-400 border border-stone-300 rounded-md">
                        <CartLineQuantityAdjustButton
                            className="px-2 hover:text-stone-500"
                            adjust="decrease"
                            aria-label="Diminuer la quantité"
                        >
                            -
                        </CartLineQuantityAdjustButton>
                        <CartLineQuantity className="px-2 text-center border-l border-r border-stone-300" />
                        <CartLineQuantityAdjustButton
                            className="px-2 hover:text-stone-500"
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
