import React from "react";
import { FaFacebookF, FaShoppingBasket, FaTiktok, FaLock } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillEnvironment,
  AiFillPhone,
  AiOutlineMenu,
} from "react-icons/ai";

type IconProps = {
  // eslint-disable-next-line react/require-default-props
  className?: string;
};

export function FacebookF({ className }: IconProps) {
  return <FaFacebookF className={className} />;
}

export function InstagramFilled({ className }: IconProps) {
  return <AiFillInstagram className={className} />;
}

export function ShoppingBasket({ className }: IconProps) {
  return <FaShoppingBasket className={className} />;
}

export function Tiktok({ className }: IconProps) {
  return <FaTiktok className={className} />;
}

export function Phone({ className }: IconProps) {
  return <AiFillPhone className={className} />;
}

export function Location({ className }: IconProps) {
  return <AiFillEnvironment className={className} />;
}

export function Menu({ className }: IconProps) {
  return <AiOutlineMenu className={className} />;
}

export function Lock({ className }: IconProps) {
  return <FaLock className={className} />;
}
