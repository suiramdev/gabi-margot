import React from "react";
import { HydrogenRouteProps, useShopQuery } from "@shopify/hydrogen";

import { Image, ImageEdge } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.server";
import PRODUCT_QUERY from "../../queries/Product";
import Breadcrumbs from "../../components/Breadcrumbs";
import Polaroid from "../../components/Polaroid";
import Button from "../../components/Button.client";
import { Lock } from "../../components/Layout/Icons.client";
import CardCarousel from "../../components/Carousel/CardCarousel.client";

function Policy({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });

  if (!product) return <NotFound />;

  const images: Image[] = product.images.edges.map(
    (edge: ImageEdge) => edge.node
  );

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Breadcrumbs
          locations={[{ name: "Accueil", to: "/" }, { name: product.title }]}
        />
        <div className="grid lg:grid-cols-[45%_100%] gap-12">
          <CardCarousel>
            {images.map((image, index) => (
              <Polaroid
                imageClassName="!w-full !h-full"
                image={image.url}
                key={image.id}
                tape={{
                  invert: index % 2 === 0,
                }}
              />
            ))}
          </CardCarousel>
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h1 className="mb-2">{product.title}</h1>
              <span className="text-2xl text-primary font-bold">30.00 €</span>
            </div>
            <p className="mb-8 prose">{product.description}</p>
            <div>
              <div className="mb-4 flex gap-4">
                <Button>Acheter maintenant</Button>
                <Button outline>Ajouter au panier</Button>
              </div>
              <span className="flex items-center gap-2 text-secondary">
                <Lock />
                Payement sécurisé
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Policy;
