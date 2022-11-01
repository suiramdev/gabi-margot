import React from "react";
import clsx from "clsx";
import {
  CartCheckoutButton,
  CartCost,
  CartLines,
  useCart,
} from "@shopify/hydrogen";
import { CartContext } from "../../../providers/CartProvider.client";
import CartItem from "./CartItem.client";
import ChevronIcon from "../../Icons/ChevronIcon.client";

function Cart() {
  const [show, setShow] = React.useContext(CartContext);
  const { cost, lines } = useCart();

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={clsx(
          "w-full h-full fixed bg-black/40 transition-opacity z-50",
          show ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setShow(false)}
      />
      <div
        className={clsx(
          "w-[450px] h-full fixed right-0 p-8 flex flex-col",
          "bg-default shadow-[-8px_0px_8px_rgba(0,0,0,0.2)] transition-transform z-50",
          show ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center my-5">
          <h2>Panier</h2>
          <button
            type="button"
            className="text-2xl"
            onClick={() => setShow(false)}
          >
            <ChevronIcon />
          </button>
        </div>
        <div className="flex-1 flex flex-col">
          <CartLines>
            <CartItem />
          </CartLines>
        </div>
        <div className="flex flex-col gap-4 py-5 border-t-2 border-gray-300 text-gray-400">
          <div className="flex justify-between items-center">
            <span>Sous-total</span>
            <CartCost amountType="subtotal" />
          </div>
          <div className="flex justify-between items-center">
            <span>Taxes</span>
            {cost?.totalTaxAmount?.amount ? (
              <CartCost amountType="tax" />
            ) : (
              <span>-</span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center py-5 border-t-2 border-gray-300">
          <span className="font-semibold text-xl">Total</span>
          <CartCost className="font-bold text-3xl" amountType="total" />
        </div>
        <div className="flex flex-col gap-2">
          <CartCheckoutButton className="btn" disabled={lines.length <= 0}>
            Passer la commande
          </CartCheckoutButton>
          <span className="text-center">
            ou{" "}
            <button
              type="button"
              onClick={() => setShow(false)}
              className="text-primary hover:underline"
            >
              continuer ses achats
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Cart;
