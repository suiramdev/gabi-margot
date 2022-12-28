import React from "react";
import { Link, useShopQuery } from "@shopify/hydrogen";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import COLLECTIONS_QUERY from "../../queries/Collections";
import Card from "../Card";

function FeaturedProducts() {
    const {
        data: { collections },
    } = useShopQuery<QueryRoot>({
        query: COLLECTIONS_QUERY,
        preload: true,
        variables: {
            first: 5,
        },
    });

    return (
        <section
            className="bg-default-100"
        >
            <h2 className="mb-10 text-center">Ils peuvent aussi vous interesser</h2>
            <div className="flex flex-wrap justify-center gap-5">
                {collections.nodes.map((collection, k) => (
                    <Link
                        to={`/collections/${collection.handle}`}
                        key={collection.id}
                        title={`Voir la collection ${collection.title}`}
                    >
                        <Card
                            image={collection.image?.url}
                            content={collection.title}
                            tape={{
                                invert: k % 2 === 0,
                            }}
                            tilt={{
                                hover: true,
                                invert: k % 2 === 0,
                            }}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;
