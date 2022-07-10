import { EntryCollection } from "contentful";
import React from "react";

import Layout from "../../components/Layout";
import MainGallery from "../../components/MainGallery";
import { getAllPaintings } from "../../services/api";

interface GalleryProps {
  data: EntryCollection<unknown>;
}

function Gallery({ data }: GalleryProps) {
  console.log(data);

  const paintings = data.items.map((item: any) => {
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
        <MainGallery paintings={paintings}></MainGallery>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getAllPaintings();

  return {
    props: { data },
  };
}

export default Gallery;
