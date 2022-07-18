import React from "react";

type Props = {
  children: React.ReactNode;
};

/* Adds a noise effect */
function Noise({ children }: Props) {
  return (
    <div className="after:content-[''] after:fixed after:top-0 after:left-0 after:w-screen after:h-screen after:bg-noise after:pointer-events-none">
      {children}
    </div>
  );
}

export default Noise;
