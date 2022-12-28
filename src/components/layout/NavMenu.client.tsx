import React from "react";
import { Link, useRouteParams } from "@shopify/hydrogen";
import type { MenuItem } from "@shopify/hydrogen/storefront-api-types";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";
import clsx from "clsx";
import { outsideClickHandler } from "../../utils/menu";
import ChevronRightIcon from "../icons/ChevronRightIcon";

type Props = {
    items: MenuItem[];
};

function NavMenu({ items }: Props) {
    const { handle } = useRouteParams();
    const [show, setShow] = React.useContext(NavMenuContext);
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    outsideClickHandler(wrapperRef, () => setShow(false));

    return (
        <div className={clsx(
            "fixed w-full h-full z-50 transition-colors",
            show ? "bg-black/40" : "pointer-events-none bg-transparent"
        )}>
            <div
                className={clsx(
                    "absolute w-full md:w-[40%] h-full top-0 right-0 flex flex-col bg-stone-100 transition-transform duration-300",
                    show ? "translate-x-0" : "translate-x-full"
                )}
                ref={wrapperRef}
            >
                <div className="p-5 flex justify-between items-center">
                    <h2>Menu</h2>
                    <button type="button" onClick={() => setShow(false)}>
                        <ChevronRightIcon size={32} />
                    </button>
                </div>
                <ul className="flex-1 flex flex-col gap-2.5">
                    {items.map((item) => {
                        const { pathname } = new URL(item.url || "");
                        return (
                            <li>
                                <Link
                                    to={`${pathname}`}
                                    className={clsx(
                                        "px-5 py-2.5 flex justify-center items-center hover:bg-stone-300",
                                        pathname.split("/").pop() === (handle || "") && "bg-stone-300"
                                    )}
                                    onClick={() => setShow(false)}
                                    key={item.id}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default NavMenu;
