import React from "react";
import { gql, useShopQuery } from "@shopify/hydrogen";
import type { Collection } from "@shopify/hydrogen/storefront-api-types";
import Header from "./Header.client";
import Noise from "./Noise.client";
import Footer from "./Footer/Footer.client";
import MobileNav from "./NavMenu.client";
import NavProvider from "../../providers/NavMenuProvider.client";
import Content from "./Content.client";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { data } = useShopQuery<any>({
    query: COLLECTIONS_QUERY,
  });

  const collections: Collection[] = data.collections.nodes;

  return (
    <Noise>
      <NavProvider>
        <MobileNav collections={collections} />
        <Content>
          <Header collections={collections} />
          {children}
          <Footer />
        </Content>
      </NavProvider>
    </Noise>
  );
}

const COLLECTIONS_QUERY = gql`
  query {
    collections(first: 5) {
      nodes {
        id
        title
        handle
      }
    }
  }
`;

export default Layout;
