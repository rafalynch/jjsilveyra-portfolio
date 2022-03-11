import { EntryCollection } from "contentful";
import React from "react";
import styles from "./index.module.css";
import CollectionBanner from "../../components/CollectionBanner";
import Layout from "../../components/Layout";
import { getAllCollections } from "../../services/api";
import { Collection } from "../../types";

interface CollectionsProps {
  collectionsData: EntryCollection<unknown>;
}

function Collections({ collectionsData }: CollectionsProps) {
  const collections: Collection[] = collectionsData.items.map((item: any) => {
    return {
      title: item.fields.title,
      image: item.fields.image.fields.file.url,
      pinturas: {},
    };
  });

  return (
    <>
      <Layout>
        <div className={styles.container}>
          {collections.map((col) => {
            return (
              <CollectionBanner
                key={col.title}
                collection={col}
              ></CollectionBanner>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getAllCollections();
  const collectionsData = JSON.parse(data);

  return {
    props: { collectionsData },
  };
}

export default Collections;
