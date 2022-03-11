import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { Collection } from "../../types";

interface CollectionBannerProps {
  collection: Collection;
}

export default function CollectionBanner({
  collection,
}: CollectionBannerProps) {
  return (
    <div className={styles.col_container}>
      <h3 className={styles.title}>{collection.title}</h3>
      <Image
        className={styles.image}
        layout="fill"
        objectFit="cover"
        src={"https:" + collection.image}
      ></Image>
    </div>
  );
}
