import React from "react";
import { Image, Link } from "@shopify/hydrogen";
import FooterSection from "./FooterSection.client";
import {
  FacebookF,
  InstagramFilled,
  Tiktok,
  Phone,
  Location,
} from "../../Icons.client";

function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start px-20 py-10 bg-default-200">
        <FooterSection>
          <Link to="/" className="flex justify-center lg:justify-start">
            <Image
              src="/assets/logo.svg"
              width={200}
              height={100}
              alt="Website's logo"
            />
          </Link>
          <span className="flex justify-center lg:justify-start gap-2">
            <Location className="text-2xl" />
            Château-Gontier, Mayenne
          </span>
          <span className="flex justify-center lg:justify-start gap-2">
            <Phone className="text-2xl" />
            (+33) 6 09 66 33 75
          </span>
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
            <Link to="/" className="p-2 bg-content text-default rounded-full">
              <FacebookF />
            </Link>
            <Link to="/" className="p-2 bg-content text-default rounded-full">
              <InstagramFilled />
            </Link>
            <Link to="/" className="p-2 bg-content text-default rounded-full">
              <Tiktok />
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
