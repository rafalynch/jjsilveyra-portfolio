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
            <div
              key={painting.title}
              data-aos="fade-in"
              className={styles.painting}
            >
              <Image
                width={painting.image.width}
                height={painting.image.height}
                src={"https:" + painting.image.url}
              ></Image>
            </div>
          </>
        );
      })}
    </div>
  );
}
