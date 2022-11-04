import React, { Suspense } from "react";
import { useShopQuery, Link } from "@shopify/hydrogen";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import SHOP_QUERY from "../queries/Shop";
import Layout from "../components/layout/Layout.server";
import HomePageSeo from "../components/seo/HomePageSeo.server";
import FeaturedCollections from "../components/sections/FeaturedCollections.server";

function Home() {
  const {
    data: { shop },
  } = useShopQuery<QueryRoot>({
    query: SHOP_QUERY,
    preload: true,
  });

  return (
    <Layout>
      <HomePageSeo />
      <section className="h-[80vh] md:bg-hero bg-cover bg-center">
        <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/3 h-full px-10 lg:px-20 py-20 bg-default-100">
          <h1>{shop.name}</h1>
          <p className="py-8">{shop.description}</p>
          <Link to="/products/all" className="btn w-fit mt-8">
            Passer aux achats
          </Link>
        </div>
      </section>
      <Suspense fallback={null}>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}

export default Home;
