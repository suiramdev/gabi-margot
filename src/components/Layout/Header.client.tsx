import React from "react";
import { Image, Link, useRouteParams } from "@shopify/hydrogen";
import type { MenuItem } from "@shopify/hydrogen/storefront-api-types";
import clsx from "clsx";
import {
  FacebookF,
  InstagramFilled,
  Menu,
  ShoppingBasket,
  Tiktok,
} from "../Icons.client";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";
import { CartContext } from "../../providers/CartProvider.client";

type Props = {
  items: MenuItem[];
};

function Header({ items }: Props) {
  const { handle } = useRouteParams();
  const [showNavMenu, setNavMenu] = React.useContext(NavMenuContext);
  const [cartShown, showCart] = React.useContext(CartContext);

  return (
    <>
      <div className="sticky top-0 left-0 flex justify-between items-center px-10 lg:px-20 py-10 text-3xl bg-default-200 lg:bg-transparent">
        <button
          type="button"
          className="block lg:hidden"
          onClick={() => setNavMenu(!showNavMenu)}
        >
          <Menu />
        </button>
        <div className="hidden lg:flex flex-1 gap-4 text-default-300">
          <Link to="/">
            <FacebookF />
          </Link>
          <Link to="/">
            <InstagramFilled />
          </Link>
          <Link to="/">
            <Tiktok />
          </Link>
        </div>
        <Link to="/">
          <Image
            src="/assets/logo.svg"
            width={200}
            height={100}
            alt="Website's logo"
          />
        </Link>
        <div className="flex lg:flex-1 justify-end gap-4">
          <button type="button" onClick={() => showCart(!cartShown)}>
            <ShoppingBasket />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex flex-wrap justify-center items-center gap-8 py-2 bg-default-200">
        {items.map((item) => {
          const { pathname } = new URL(item.url || "");
          return (
            <Link
              to={`${pathname}`}
              className={clsx(
                "hover:text-primary hover:no-underline",
                pathname.split("/").pop() === (handle || "") &&
                  "text-primary font-bold"
              )}
              key={item.id}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Header;
