import React from "react";
import { Image, Link } from "@shopify/hydrogen";
import FooterSection from "./FooterSection.client";
import {
  FacebookIcon,
  InstagramIcon,
  MarkerIcon,
  PhoneIcon,
  TikTokIcon,
} from "../../elements/Icon";

function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start px-20 py-10 bg-default-200">
        <FooterSection>
          <Link
            to="/"
            className="flex justify-center lg:justify-start"
            title="Aller à la page d'accueil"
          >
            <Image
              src="/assets/logo.svg"
              width={200}
              height={100}
              alt="Logo du site"
            />
          </Link>
          <span className="flex items-center justify-center lg:justify-start gap-2">
            <MarkerIcon />
            Château-Gontier, Mayenne
          </span>
          <a
            className="flex items-center justify-center lg:justify-start gap-2"
            href="tel:+336 09 66 33 75"
            title="Appeler le 06 09 66 33 75"
          >
            <PhoneIcon />
            (+33) 6 09 66 33 75
          </a>
        </FooterSection>
        <FooterSection title="Autres pages">
          <Link to="/about-us">Qui sommes nous ?</Link>
          <Link to="/contact-us">Nous contacter</Link>
        </FooterSection>
        <FooterSection title="Informations">
          <Link to="/policies/privacy-policy">
            Politique de confidentialité
          </Link>
          <Link to="/policies/shipping-policy">
            Politique d&apos;expédition
          </Link>
          <Link to="/policies/terms-of-service">Conditions de service</Link>
          <Link to="/policies/refund-policy">Politique de remboursement</Link>
        </FooterSection>
        <FooterSection title="Suivez nous">
          <div className="flex justify-center lg:justify-start gap-2">
            <Link
              to="/"
              className="p-2 bg-content text-default rounded-full"
              title="Aller sur la page Facebook"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="/"
              className="p-2 bg-content text-default rounded-full"
              title="Aller sur la page Instagram"
            >
              <InstagramIcon />
            </Link>
            <Link
              to="/"
              className="p-2 bg-content text-default rounded-full"
              title="Aller sur la page TikTok"
            >
              <TikTokIcon />
            </Link>
          </div>
        </FooterSection>
      </div>
      <div className="h-2 bg-vintage-green" />
      <div className="h-2 bg-vintage-blue" />
      <div className="h-2 bg-vintage-red" />
    </>
  );
}

export default Footer;
