import React, { Suspense } from "react";
import type {
  CollectionConnection,
  Collection,
} from "@shopify/hydrogen/storefront-api-types";
import { Link } from "@shopify/hydrogen";
import Polaroid from "../Polaroid";

type Props = {
  collectionConnection: CollectionConnection;
  url: string;
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

function CollectionGrid({ collectionConnection, url }: Props) {
  const [collections, setCollections] = React.useState<Collection[]>([]);
  const [pageInfo, setPageInfo] = React.useState<PageInfo>({
    endCursor: "",
    hasNextPage: false,
  });
  const [pending, setPending] = React.useState<boolean>(false);

  React.useEffect(() => {
    setPageInfo(
      (collectionConnection.pageInfo as PageInfo) || {
        endCursor: "",
        hasNextPage: false,
      }
    );
    setCollections(collectionConnection.nodes || []);
  }, [collectionConnection]);

  const loadMore = async () => {
    if (pending || !pageInfo.hasNextPage) return;

    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set("cursor", pageInfo.endCursor);

    const response = await fetch(postUrl, {
      method: "POST",
    });
    const { data } = await response.json();

    const newCollections = data?.collection?.nodes || [];

    setCollections([...collections, ...newCollections]);
    setPageInfo(
      (data?.collection.pageInfo as PageInfo) || {
        endCursor: "",
        hasNextPage: false,
      }
    );
    setPending(false);
  };

  return (
    <>
      <div className="flex-wrap grid grid-flow-col auto-cols-max gap-12">
        <Suspense fallback={null}>
          {collections.map((collection, index) => (
            <Link
              to={`/collections/${collection.handle}`}
              key={collection.id}
              className="hover:no-underline"
            >
              <Polaroid
                image={collection.image?.url}
                content={collection.title}
                tape={{
                  invert: index % 2 === 0,
                }}
                tilt={{
                  hover: true,
                  invert: index % 2 === 0,
                }}
              />
            </Link>
          ))}
        </Suspense>
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

export default CollectionGrid;
