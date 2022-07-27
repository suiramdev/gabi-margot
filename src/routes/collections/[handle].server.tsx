import React, { Suspense } from "react";
import { HydrogenRouteProps, Link, useShopQuery } from "@shopify/hydrogen";
import { Product, ProductEdge } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../../components/Layout/Layout.server";
import COLLECTION_QUERY from "../../queries/Collection";
import NotFound from "../../components/NotFound.server";
import Polaroid from "../../components/Polaroid";

function Policy({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { collection },
  } = useShopQuery({
    query: COLLECTION_QUERY,
    variables: {
      handle,
    },
  });

  if (!collection) return <NotFound />;

  const products: Product[] = collection.products.edges.map(
    (edge: ProductEdge) => edge.node
  );

  return (
    <Layout>
      <section className="min-h-screen py-24 px-32">
        <Suspense fallback={null}>
          <div className="mb-8 flex gap-1 text-neutral-400">
            <Link to="/">Accueil</Link>
            <span>&gt;</span>
            <span>{collection.title}</span>
          </div>
        </Suspense>
        <Suspense fallback={null}>
          <h1 className="mb-12">{collection.title}</h1>
        </Suspense>
        <Suspense fallback={null}>
          <div className="flex gap-12 flex-wrap">
            {products.map((product, k) => (
              <Link
                to={`/products/${product.handle}`}
                key={product.id}
                className="hover:no-underline"
              >
                <Polaroid
                  image={product.images.edges[0].node.url}
                  content={product.title}
                  tape={{
                    invert: k % 2 === 0,
                  }}
                  tilt={{
                    hover: true,
                    invert: k % 2 === 0,
                  }}
                  soldOut={!product.availableForSale}
                />
              </Link>
            ))}
          </div>
        </Suspense>
      </section>
    </Layout>
  );
}

export default Policy;
