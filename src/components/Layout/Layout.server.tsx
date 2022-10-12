import React from "react";
import { useShopQuery } from "@shopify/hydrogen";
import Header from "./Header.client";
import Noise from "./Noise.client";
import Footer from "./Footer/Footer.client";
import NavMenu from "./NavMenu.client";
import NavMenuProvider from "../../providers/NavMenuProvider.client";
import Content from "./Content.client";
import MENU_QUERY from "../../queries/Menu";
import CartProvider from "../../providers/CartProvider.client";
import Cart from "./Cart/Cart.client";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { data } = useShopQuery<any>({
    query: MENU_QUERY,
  });

  return (
    <Noise>
      <CartProvider>
        <Cart />
        <NavMenuProvider>
          <NavMenu items={data.menu.items} />
          <Content>
            <Header items={data.menu.items} />
            {children}
            <Footer />
          </Content>
        </NavMenuProvider>
      </CartProvider>
    </Noise>
  );
}

export default Layout;
