import React from "react";
import { useShopQuery } from "@shopify/hydrogen";
import MENU_QUERY from "../../queries/Menu";
import CartProvider from "../../providers/CartProvider.client";
import Cart from "./cart/Cart.client";
import Navbar from "./Navbar.client";
import Footer from "./Footer.server";
import NavMenu from "./NavMenu.client";
import NavMenuProvider from "../../providers/NavMenuProvider.client";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    const { data } = useShopQuery<any>({
        query: MENU_QUERY,
    });

    return (
        <NavMenuProvider>
            <CartProvider>
                <Cart />
                <NavMenu items={data.menu.items} />
                <Navbar items={data.menu.items} />
                {children}
                <Footer />
            </CartProvider>
        </NavMenuProvider>
    );
}

export default Layout;
