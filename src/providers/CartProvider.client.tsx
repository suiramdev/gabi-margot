import React from "react";
import { CartProvider as ShopifyCartProvider } from "@shopify/hydrogen";

export const CartContext = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

function CartProvider({ children }: Props) {
  const [context, setContext] = React.useState<boolean>(false);
  const contextMemo = React.useMemo(() => [context, setContext], [context]);

  return (
    <ShopifyCartProvider>
      <CartContext.Provider value={contextMemo}>
        {children}
      </CartContext.Provider>
    </ShopifyCartProvider>
  );
}

export default CartProvider;
