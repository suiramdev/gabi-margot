import { Link } from "@shopify/hydrogen";
import Layout from "../components/layout/Layout.server";
import FeaturedCollections from "../components/sections/FeaturedCollections.server";

export default function Home() {
    return (
        <Layout>
            <div className="bg-hero bg-center">
                <section className="py-20 md:w-1/2 flex flex-col gap-10 bg-stone-100">
                    <h1 className="text-5xl">Meubles chinés et relookés avec soin</h1>
                    <p>
                        <b>Découvrez</b> notre boutique en ligne de mobilier vintage <b>unique</b> et <b>écologique</b> !
                        Nous proposons une <b>large</b> sélection de meubles chinés et relookés avec soin, ainsi que des créations
                        originales réalisées grâce à l'<b>upcycling</b> de matériaux de qualité. Notre gamme de produits s'inspire
                        de différentes époques et styles, pour apporter une touche de <b>charme</b> et de <b>caractère</b> à votre intérieur.
                        Nous mettons un point d'honneur à proposer des pièces de <b>qualité</b>, dans un esprit respectueux de l'environnement.
                        Parcourez notre sélection de mobilier vintage et laissez-vous séduire par leur <b>charme intemporel</b> !
                    </p>
                    <Link to="/products" className="w-fit btn btn-primary">Chiner notre sélection</Link>
                </section>
            </div>
            <FeaturedCollections />
            <section className="flex flex-col gap-10 text-center bg-stone-100">
                <h2>Qui sommes nous ?</h2>
                <p>
                    Gabi & Margot est une boutique en ligne de mobilier vintage <b>écologique</b>, créée par deux passionnées de décoration intérieure.
                    Le nom de notre entreprise rend hommage à nos grand-mères, à qui nous devons notre amour pour les beaux meubles et l'<b>upcycling</b>.
                    Nous proposons une sélection de meubles chinés et relookés avec soin, ainsi que des créations originales réalisées à partir de matériaux de qualité.
                    Notre gamme de produits s'inspire de différentes époques et styles, pour apporter une touche de <b>charme</b> et de <b>caractère</b> à votre intérieur.
                    Nous mettons un point d'honneur à proposer des pièces de qualité, dans un esprit respectueux de l'environnement.
                    Nous espérons que notre passion pour le mobilier vintage se ressentira à travers chacune de nos créations et que vous trouverez chez nous de quoi embellir votre intérieur de manière unique et personnelle.
                </p>
            </section>
        </Layout>
    );
}
