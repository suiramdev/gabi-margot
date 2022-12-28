import React from "react";
import { Image, Link } from "@shopify/hydrogen";
import PlaceIcon from "../icons/PlaceIcon";
import PhoneIcon from "../icons/PhoneIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

type SectionProps = {
    title?: string;
    children: React.ReactNode;
};

function FooterSection({ title, children }: SectionProps) {
    return (
        <div className="flex flex-col items-center lg:items-start gap-2.5">
            {title ? <span className="font-serif font-semibold text-lg">{title}</span> : null}
            {children}
        </div>
    );
}

function Footer() {
    return (
        <footer className="nest flex flex-col lg:flex-row gap-10 lg:justify-between items-center lg:items-start bg-stone-200">
            <FooterSection>
                <Link to="/" title="Se diriger sur la page d'accueil">
                    <Image src="/logo.svg" width={150} height={50} />
                </Link>
                <span className="flex items-center gap-1"><PlaceIcon size={24} /> Château-Gontier, Mayenne</span>
                <a
                    className="flex items-center gap-1"
                    href="tel:+336 09 66 33 75"
                    title="Appeler le 06 09 66 33 75"
                >
                    <PhoneIcon size={24} /> (+33) 6 09 66 33 75
                </a>
            </FooterSection>
            <FooterSection title="Autres pages">
                <Link to="/about-us">Qui sommes nous</Link>
                <Link to="/contact-us">Nous contacter</Link>
            </FooterSection>
            <FooterSection title="Informations">
                <Link to="/policies/privacy-policy">Politique de confidentialité</Link>
                <Link to="/policies/shipping-policy">Politique d&apos;expédition</Link>
                <Link to="/policies/terms-of-service">Conditions de service</Link>
                <Link to="/policies/refund-policy">Politique de remboursement</Link>
            </FooterSection>
            <FooterSection title="Suivez nous">
                <div className="flex gap-2">
                    <Link to="/" title="Aller sur la page Facebook">
                        <FacebookIcon size={32} />
                    </Link>
                    <Link to="/" title="Aller sur la page Instagram">
                        <InstagramIcon size={32} />
                    </Link>
                </div>
            </FooterSection>
        </footer>
    );
}

export default Footer;
