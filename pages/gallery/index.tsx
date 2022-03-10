import { EntryCollection } from "contentful";
import React from "react";

import Layout from "../../components/Layout";
import MainGallery from "../../components/MainGallery";
import { getAllPaintings } from "../../services/api";

interface GalleryProps {
  paintingsRes: EntryCollection<unknown>;
}

function Gallery({ paintingsRes }: GalleryProps) {
  const paintings = paintingsRes.items.map((item: any) => {
    return {
      title: item.fields.titulo,
      image: item.fields.foto.fields.file.url,
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
        <MainGallery paintings={paintings}></MainGallery>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getAllPaintings();
  const paintingsRes = JSON.parse(data);

  return {
    props: { paintingsRes },
  };
}

export default Gallery;
