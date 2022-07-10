import { EntryCollection } from "contentful";
import React from "react";
import styles from "./index.module.css";
import CollectionBanner from "../../components/CollectionBanner";
import Layout from "../../components/Layout";
import { getAllCollections } from "../../services/api";
import { Collection } from "../../types";

interface CollectionsProps {
  data: EntryCollection<unknown>;
}

function Collections({ data }: CollectionsProps) {
  console.log(data);

  const collections: Collection[] = data.items.map((item: any) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      image: item.fields.image.fields.file.url,
      pinturas: {},
    };
  });

  return (
    <>
      <Layout>
        <div className={styles.container}>
          {collections.map((col, index) => {
            return (
              <CollectionBanner key={index} collection={col}></CollectionBanner>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getAllCollections();

  return {
    props: { data },
  };
}

export default Collections;
