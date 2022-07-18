import React from "react";
import { Image, Link, useRouteParams } from "@shopify/hydrogen";
import type { Collection } from "@shopify/hydrogen/storefront-api-types";
import clsx from "clsx";
import {
  FacebookF,
  InstagramFilled,
  Menu,
  ShoppingBasket,
  Tiktok,
} from "./Icons.client";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";

type Props = {
  collections: Collection[];
};

function Header({ collections }: Props) {
  const { handle } = useRouteParams();
  const [showNavMenu, setNavMenu] = React.useContext(NavMenuContext);

  return (
    <>
      <div className="flex justify-between items-center px-10 lg:px-20 py-10 text-3xl bg-default-200 lg:bg-transparent">
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
        <div className="hidden lg:flex flex-1 justify-end gap-4">
          <button type="button">
            <ShoppingBasket />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex flex-wrap justify-center items-center gap-8 py-2 bg-default-200">
        <Link
          to="/"
          className={clsx(
            "hover:text-primary hover:no-underline",
            !handle && "text-primary font-bold"
          )}
        >
          Accueil
        </Link>
        {collections.map((collection) => (
          <Link
            to={collection.handle}
            className={clsx(
              "hover:text-primary hover:no-underline",
              collection.handle === handle && "text-primary font-bold"
            )}
            key={collection.id}
          >
            {collection.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Header;
