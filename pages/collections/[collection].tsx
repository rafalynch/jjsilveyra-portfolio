import { EntryCollection } from "contentful";
import React from "react";
import styles from "./collection.module.css";
import CollectionBanner from "../../components/CollectionBanner";
import Layout from "../../components/Layout";
import { getAllPaintings, getCollectionByEntryId } from "../../services/api";
import { Collection } from "../../types";
import { AppContext } from "next/app";
import { GetServerSideProps } from "next";
import MainGallery from "../../components/MainGallery";

interface CollectionsProps {
  collection: any;
}

function CollectionPage({ collection }: CollectionsProps) {
  const paintings = collection?.fields.pinturas.map((item: any) => {
    return {
      title: item.fields.titulo,
      image: {
        url: item.fields.foto.fields.file.url,
        width: item.fields.foto.fields.file.details.image.width,
        height: item.fields.foto.fields.file.details.image.height,
      },
      isAvailable: item.fields.disponible,
      size: item.fields.medida,
      year: item.fields.year,
      place: item.fields.lugar,
      type: item.fields.type || "Óleo sobre lienzo",
      collection: item.fields.collection || "none",
    };
  });

  return (
    <>
      <Layout>
        <>
          <h1 className={styles.title}>{collection.fields.title}</h1>
          {paintings && <MainGallery paintings={paintings}></MainGallery>}
        </>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const collection = await getCollectionByEntryId(context.params.collection);
    return {
      props: { collection },
    };
  } catch {
    return {
      redirect: {
        destination: "/",
      },
      props: {},
    };
  }
}

export default CollectionPage;
