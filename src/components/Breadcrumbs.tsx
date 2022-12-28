import React from "react";
import { Link } from "@shopify/hydrogen";
import ChevronRightIcon from "./icons/ChevronRightIcon";

type LocationProps = {
    name: string;
    to?: string;
};

type Props = {
    locations: LocationProps[];
};

function Breadcrumbs({ locations }: Props) {
    return (
        <div className="mb-8 flex items-center text-stone-500">
            {locations.map((location, k) => (
                <>
                    {location.to ? (
                        <Link
                            to={location.to}
                            className="hover:underline"
                            key={location.name}
                        >
                            {location.name}
                        </Link>
                    ) : (
                        <span key={location.name}>{location.name}</span>
                    )}
                    {k < locations.length - 1 && <ChevronRightIcon size={24} />}
                </>
            ))}
        </div>
    );
}

export default Breadcrumbs;
