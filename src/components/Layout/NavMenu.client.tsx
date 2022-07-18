import React from "react";
import {Image, Link, useRouteParams} from "@shopify/hydrogen";
import type { Collection } from "@shopify/hydrogen/storefront-api-types";
import clsx from "clsx";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";
import { ShoppingBasket } from "./Icons.client";

type Props = {
  collections: Collection[];
};

function NavMenu({ collections }: Props) {
  const { handle } = useRouteParams();
  const [show] = React.useContext(NavMenuContext);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-1/2 h-screen flex lg:hidden flex-col gap-4 bg-default-200 shadow-inner transition-transform",
        show ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex justify-between p-10 text-3xl">
        <Link to="/" className="hidden md:block">
          <Image
            src="/assets/logo.svg"
            width={200}
            height={100}
            alt="Website's logo"
          />
        </Link>
        <button type="button">
          <ShoppingBasket />
        </button>
      </div>
      <Link
        to="/"
        className={clsx(
          "flex justify-center items-center px-10 py-5 bg-default-300 text-center hover:text-primary hover:no-underline",
          !handle && "font-bold text-primary"
        )}
      >
        Accueil
      </Link>
      {collections.map((collection) => (
        <Link
          to={collection.handle}
          className={clsx(
            "flex justify-center items-center px-10 py-5 bg-default-300 text-center hover:text-primary hover:no-underline",
            handle === collection.handle && "font-bold text-primary"
          )}
          key={collection.id}
        >
          {collection.title}
        </Link>
      ))}
    </div>
  );
}

export default NavMenu;
