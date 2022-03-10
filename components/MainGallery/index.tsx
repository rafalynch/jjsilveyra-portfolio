import Image from "next/image";
import React from "react";
import { Painting } from "../../types";
import styles from "./index.module.css";

interface MainGalleryProps {
  paintings: Painting[];
}

export default function MainGallery({ paintings }: MainGalleryProps) {
  return (
    <div className={styles.container}>
      {paintings.map((painting) => {
        return (
          <>
            <div className={styles.painting}>
              <Image
                layout="fill"
                objectFit={"contain"}
                src={"http:" + painting.image}
              ></Image>
            </div>
          </>
        );
      })}
    </div>
  );
}
