import React from "react";
import { useShopQuery } from "@shopify/hydrogen";
import Header from "./Header.client";
import Noise from "./Noise.client";
import Footer from "./Footer/Footer.client";
import MobileNav from "./NavMenu.client";
import NavProvider from "../../providers/NavMenuProvider.client";
import Content from "./Content.client";
import MENU_QUERY from "../../queries/Menu";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { data } = useShopQuery<any>({
    query: MENU_QUERY,
  });

  return (
    <Noise>
      <NavProvider>
        <MobileNav items={data.menu.items} />
        <Content>
          <Header items={data.menu.items} />
          {children}
          <Footer />
        </Content>
      </NavProvider>
    </Noise>
  );
}

export default Layout;
