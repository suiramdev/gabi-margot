import React from "react";
import { Image, Link, useRouteParams } from "@shopify/hydrogen";
import type { MenuItem } from "@shopify/hydrogen/storefront-api-types";
import { CartContext } from "../../providers/CartProvider.client";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";
import MenuIcon from "../icons/MenuIcon";
import BasketIcon from "../icons/BasketIcon";
import clsx from "clsx";

type Props = {
    items: MenuItem[];
};

function Navbar({ items }: Props) {
    const { handle } = useRouteParams();
    const [, setShowCart] = React.useContext(CartContext);
    const [, setShowMenu] = React.useContext(NavMenuContext);

    return (
        <div className="nest flex justify-between items-center bg-stone-200">
            <div className="flex-1 flex items-center gap-2.5">
                <Link to="/" title="Se diriger sur la page d'accueil">
                    <Image src="/logo.svg" width={150} height={50} />
                </Link>
            </div>
            <ul className="flex-1 hidden lg:flex justify-center gap-5">
                {items.map((item) => {
                    const { pathname } = new URL(item.url || "");
                    return (
                        <li>
                            <Link
                                to={`${pathname}`}
                                className={clsx(
                                    "px-2.5 py-1 flex justify-center items-center hover:bg-stone-300 rounded-lg",
                                    pathname.split("/").pop() === (handle || "") && "bg-stone-300"
                                )}
                                key={item.id}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex-1 flex justify-end gap-2.5">
                <button
                    type="button"
                    onClick={() => setShowCart(true)}
                    name="Afficher mon panier"
                >
                    <BasketIcon size={24} />
                </button>
                <button
                    type="button"
                    className="lg:hidden"
                    onClick={() => setShowMenu(true)}
                    name="Afficher le menu de navigation"
                >
                    <MenuIcon size={24} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
