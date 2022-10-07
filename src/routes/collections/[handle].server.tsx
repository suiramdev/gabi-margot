import React, { Suspense } from "react";
import { HydrogenRouteProps, Link, useShopQuery } from "@shopify/hydrogen";
import { Product, ProductEdge } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../../components/Layout/Layout.server";
import COLLECTION_QUERY from "../../queries/Collection";
import NotFound from "../../components/NotFound.server";
import Polaroid from "../../components/Polaroid";
import Breadcrumbs from "../../components/Breadcrumbs";

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
          <Breadcrumbs
            locations={[
              { name: "Accueil", to: "/" },
              { name: collection.title },
            ]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <h1 className="mb-12">{collection.title}</h1>
        </Suspense>
        <Suspense fallback={null}>
          <div className="grid grid-flow-col auto-cols-max gap-12 flex-wrap">
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
