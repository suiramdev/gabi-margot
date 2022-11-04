import React from "react";
import type {
  Product,
  ProductConnection,
} from "@shopify/hydrogen/storefront-api-types";
import { Link } from "@shopify/hydrogen";
import Card from "../elements/Card";

type Props = {
  initialData: ProductConnection;
  url: string;
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

function ProductGrid({ initialData, url }: Props) {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [pageInfo, setPageInfo] = React.useState<PageInfo>({
    endCursor: "",
    hasNextPage: false,
  });
  const [pending, setPending] = React.useState<boolean>(false);

  React.useEffect(() => {
    setPageInfo(
      (initialData.pageInfo as PageInfo) || {
        endCursor: "",
        hasNextPage: false,
      }
    );
    setProducts(initialData.nodes || []);
  }, [initialData]);

  const loadMore = async () => {
    if (pending || !pageInfo.hasNextPage) return;

    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set("cursor", pageInfo.endCursor);

    const response = await fetch(postUrl, {
      method: "POST",
    });
    const { data } = await response.json();

    const newProducts = data?.nodes || [];

    setProducts([...products, ...newProducts]);
    setPageInfo(
      (data?.pageInfo as PageInfo) || {
        endCursor: "",
        hasNextPage: false,
      }
    );
    setPending(false);
  };

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-12">
        {products.map((product, index) => (
          <Link
            to={`/products/${product.handle}`}
            className="hover:no-underline"
            key={product.id}
            title={`Voir le produit ${product.title}`}
          >
            <Card
              image={product.images?.nodes[0]?.url}
              content={product.title}
              tape={{
                invert: index % 2 === 0,
              }}
              tilt={{
                hover: true,
                invert: index % 2 === 0,
              }}
              soldOut={!product.availableForSale}
            />
          </Link>
        ))}
      </div>
      {pageInfo.hasNextPage ? (
        <div className="my-8 flex justify-center items-center">
          <button type="button" className="btn" onClick={loadMore}>
            Voir plus
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ProductGrid;
