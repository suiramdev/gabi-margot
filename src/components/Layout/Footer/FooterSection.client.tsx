import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};

function FooterSection({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-4 text-center lg:text-left">
      {title ? (
        <span className="text-2xl font-serif font-bold">{title}</span>
      ) : null}
      {children}
    </div>
  );
}

FooterSection.defaultProps = {
  title: "",
};

export default FooterSection;
