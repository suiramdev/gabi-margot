import React from "react";
import Layout from "../components/Layout/Layout.server";
import Button from "../components/Button.client";

function Home() {
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
          <Button className="w-fit mt-8">Passer aux achats</Button>
        </div>
      </section>
      <section className="flex flex-col items-center py-20">
        <h2>Nos Produits</h2>
        <div className="flex gap-4" />
      </section>
    </Layout>
  );
}

export default Home;
