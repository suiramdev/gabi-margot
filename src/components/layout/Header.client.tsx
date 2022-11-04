import React from "react";
import { Image, Link, useRouteParams } from "@shopify/hydrogen";
import type { MenuItem } from "@shopify/hydrogen/storefront-api-types";
import clsx from "clsx";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";
import { CartContext } from "../../providers/CartProvider.client";
import {
  BasketIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  TikTokIcon,
} from "../elements/Icon";

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
          aria-label="Ouvrir le menu de navigation"
        >
          <MenuIcon size="md" />
        </button>
        <div className="hidden lg:flex flex-1 gap-4 text-default-300">
          <Link to="/" title="Aller sur la page Facebook">
            <FacebookIcon size="md" />
          </Link>
          <Link to="/" title="Aller sur la page Instagram">
            <InstagramIcon size="md" />
          </Link>
          <Link to="/" title="Aller sur la page TikTok">
            <TikTokIcon size="md" />
          </Link>
        </div>
        <Link to="/" title="Aller à la page d'accueil">
          <Image
            src="/assets/logo.svg"
            width={200}
            height={100}
            alt="Logo du site"
          />
        </Link>
        <div className="flex lg:flex-1 justify-end gap-4">
          <button
            type="button"
            onClick={() => showCart(!cartShown)}
            aria-label="Ouvrir le panier"
          >
            <BasketIcon size="md" />
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
