import React from "react";
import { Link } from "@shopify/hydrogen";

type LocationProps = {
  name: string;
  to?: string;
};

type Props = {
  locations: LocationProps[];
};

function Breadcrumbs({ locations }: Props) {
  return (
    <div className="mb-8 flex gap-1 text-neutral-400">
      {locations.map((location, k) => (
        <>
          {location.to ? (
            <Link key={location.name} to={location.to}>
              {location.name}
            </Link>
          ) : (
            <span key={location.name}>{location.name}</span>
          )}
          {k < locations.length - 1 && <span>&gt;</span>}
        </>
      ))}
    </div>
  );
}

export default Breadcrumbs;
