import React, { Suspense } from "react";
import { useShopQuery, Link } from "@shopify/hydrogen";
import { Collection } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../components/Layout/Layout.server";
import Polaroid from "../components/Polaroid";
import COLLECTIONS_QUERY from "../queries/Collections";

function Home() {
  const { data } = useShopQuery<any>({
    query: COLLECTIONS_QUERY,
    preload: true,
  });

  const collections: Collection[] = data.collections.nodes;

  return (
    <Layout>
      <section className="h-[80vh] md:bg-hero bg-cover bg-center">
        <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/3 h-full px-10 lg:px-20 py-20 bg-default-100">
          <h1 className="flex flex-col w-fit text-6xl text-center">
            Un Esprit
            <span className="text-7xl">Vintage</span>
          </h1>
          <p className="py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui
            nisi, vehicula sit amet lobortis quis, ornare eget leo. Sed
            faucibus, nisl vitae auctor semper, lacus nisl finibus diam, id
            tristique orci justo et mauris. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button type="button" className="btn w-fit mt-8">
            Passer aux achats
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center py-20">
        <h2 className="mb-12">Nos Produits</h2>
        <div className="flex-1">
          <div className="mx-auto justify-center flex flex-wrap gap-12">
            <Suspense fallback={null}>
              {collections.map((collection, k) => (
                <Link
                  to={`/collections/${collection.handle}`}
                  className="hover:no-underline"
                  key={collection.id}
                >
                  <Polaroid
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
            </Suspense>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
