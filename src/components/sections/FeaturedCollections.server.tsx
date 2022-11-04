import React from "react";
import { Link, useShopQuery } from "@shopify/hydrogen";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import COLLECTIONS_QUERY from "../../queries/Collections";
import Section from "../elements/Section";
import Card from "../elements/Card";

function FeaturedCollections() {
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
    <Section
      className="flex flex-col items-center py-20"
      title="Nos Collections"
    >
      <div className="mx-auto justify-center flex flex-wrap gap-12">
        {collections.nodes.map((collection, k) => (
          <Link
            to={`/collections/${collection.handle}`}
            className="hover:no-underline"
            key={collection.id}
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
    </Section>
  );
}

export default FeaturedCollections;
