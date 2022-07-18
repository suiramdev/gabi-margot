import React from "react";
import { Link } from "@shopify/hydrogen";

function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen bg-neutral-300">
      <span className="text-4xl">Page introuvable</span>
      <Link to="/">Retourner sur le site</Link>
    </div>
  );
}

export default NotFound;
