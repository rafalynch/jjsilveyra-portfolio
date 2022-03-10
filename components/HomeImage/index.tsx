import { Asset } from "contentful";
import React from "react";
import Image from "next/image";
import { getHomeImage } from "../../services/api";
import styles from "./index.module.css";

interface HomeImageProps {
  homeImage: Asset;
}

function HomeImage({ homeImage }: HomeImageProps) {
  return (
    <Image
      className={styles.image}
      layout="fill"
      objectFit="cover"
      src={"https:" + homeImage.fields.file.url}
    ></Image>
  );
}

export default HomeImage;
