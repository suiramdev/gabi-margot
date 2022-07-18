import React from "react";

export const NavMenuContext = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

function NavMenuProvider({ children }: Props) {
  const [context, setContext] = React.useState<boolean>(false);

  return (
    <NavMenuContext.Provider value={[context, setContext]}>
      {children}
    </NavMenuContext.Provider>
  );
}

export default NavMenuProvider;
