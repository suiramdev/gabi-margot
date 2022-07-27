import React from "react";
import clsx from "clsx";
import { NavMenuContext } from "../../providers/NavMenuProvider.client";

type Props = {
  children: React.ReactNode;
};

function Content({ children }: Props) {
  const [showNavMenu] = React.useContext(NavMenuContext);

  return (
    <div
      className={clsx(
        "transition-transform lg:translate-x-0",
        showNavMenu && "translate-x-1/2"
      )}
    >
      {children}
    </div>
  );
}

export default Content;
