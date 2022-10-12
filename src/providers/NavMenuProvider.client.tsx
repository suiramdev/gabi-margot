import React from "react";

export const NavMenuContext = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

function NavMenuProvider({ children }: Props) {
  const [context, setContext] = React.useState<boolean>(false);
  const contextMemo = React.useMemo(() => [context, setContext], [context]);

  return (
    <NavMenuContext.Provider value={contextMemo}>
      {children}
    </NavMenuContext.Provider>
  );
}

export default NavMenuProvider;
