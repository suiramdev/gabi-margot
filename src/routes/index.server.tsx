import { Link } from "@shopify/hydrogen";
import Layout from "../components/layout/Layout.server";
import FeaturedCollections from "../components/sections/FeaturedCollections.server";

export default function Home() {
    return (
        <Layout>
            <div className="bg-hero bg-center">
                <section className="py-20 md:w-1/2 lg:w-1/3 flex flex-col gap-10 bg-stone-100">
                    <h1>Un Esprit Vintage</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dui nisi, vehicula sit amet lobortis quis, ornare eget leo. Sed faucibus, nisl vitae auctor semper,
                        lacus nisl finibus diam.
                    </p>
                    <Link to="/products" className="btn btn-primary">Passer aux achats</Link>
                </section>
            </div>
            <FeaturedCollections />
        </Layout>
    );
}
