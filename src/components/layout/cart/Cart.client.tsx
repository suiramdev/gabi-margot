import React from "react";
import { CartCheckoutButton, CartCost, CartLineProvider, useCart } from "@shopify/hydrogen";
import { CartContext } from "../../../providers/CartProvider.client";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem.client";
import { outsideClickHandler } from "../../../utils/menu";
import ChevronRightIcon from "../../icons/ChevronRightIcon";

function Cart() {
    const [show, setShow] = React.useContext(CartContext);
    const { cost, lines } = useCart();
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    outsideClickHandler(wrapperRef, () => setShow(false));

    return (
        <div className={clsx(
            "fixed w-full h-full z-50 transition-colors",
            show ? "bg-black/40" : "pointer-events-none bg-transparent"
        )}>
            <div
                className={clsx(
                    "absolute w-full md:w-[40%] h-full top-0 right-0 p-5 flex flex-col gap-5 bg-stone-100 transition-transform duration-300",
                    show ? "translate-x-0" : "translate-x-full"
                )}
                ref={wrapperRef}
            >
                <div className="flex justify-between items-center">
                    <h2>Panier</h2>
                    <button type="button" onClick={() => setShow(false)}>
                        <ChevronRightIcon size={32} />
                    </button>
                </div>
                {lines.length > 0 ? (
                    <>
                        <ul className="flex-1 flex flex-col gap-4 overflow-y-scroll">
                            <AnimatePresence>
                                {lines.map((line) => (
                                    <motion.li
                                        key={line.id}
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CartLineProvider line={line}>
                                            <CartItem />
                                        </CartLineProvider>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                        <div className="flex flex-col py-2.5 border-t-2 border-stone-300 text-stone-400">
                            <div className="flex justify-between items-center">
                                <span>Sous-total</span>
                                <CartCost amountType="subtotal" />
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Taxes</span>
                                {cost?.totalTaxAmount?.amount ? (
                                    <CartCost amountType="tax" />
                                ) : (
                                    <span>GRATUIT</span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <CartCheckoutButton className="btn btn-primary" disabled={lines.length <= 0}>
                                Passer la commande
                            </CartCheckoutButton>
                            <span className="text-center">
                                ou{" "}
                                <button
                                    type="button"
                                    onClick={() => setShow(false)}
                                    className="text-orange-600 hover:underline"
                                >
                                    continuer ses achats
                                </button>
                            </span>
                        </div>
                    </>
                ) : (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
                        <span>Votre panier est vide</span>
                        <button
                            type="button"
                            onClick={() => setShow(false)}
                            className="text-orange-600 hover:underline"
                        >
                            continuer ses achats
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
