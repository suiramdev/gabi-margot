import React from "react";
import { Image, Link, useRouteParams } from "@shopify/hydrogen";
import type { MenuItem } from "@shopify/hydrogen/storefront-api-types";
import clsx from "clsx";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";
import { ShoppingBasket } from "../Icons.client";
import { CartContext } from "../../providers/CartProvider.client";

type Props = {
  items: MenuItem[];
};

function NavMenu({ items }: Props) {
  const { handle } = useRouteParams();
  const [show] = React.useContext(NavMenuContext);
  const [cartShown, showCart] = React.useContext(CartContext);

  return (
    <div
      className={clsx(
        "w-[70%] h-screen fixed top-0 left-0 flex lg:hidden flex-col bg-default-200 transition-transform",
        "after:absolute after:w-full after:h-full after:pointer-events-none after:shadow-[-9px_1px_22px_1px_rgba(0,0,0,0.1)_inset]",
        show ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex justify-between p-10 text-3xl">
        <Link to="/">
          <Image
            src="/assets/logo.svg"
            width={200}
            height={100}
            alt="Website's logo"
          />
        </Link>
        <button type="button" onClick={() => showCart(!cartShown)}>
          <ShoppingBasket />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => {
          const { pathname } = new URL(item.url || "");

          return (
            <Link
              to={`${pathname}`}
              className={clsx(
                "flex justify-center items-center px-10 py-5 bg-default-300 text-center hover:text-primary hover:no-underline",
                pathname.split("/").pop() === (handle || "") &&
                  "font-bold text-primary"
              )}
              key={item.id}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavMenu;
