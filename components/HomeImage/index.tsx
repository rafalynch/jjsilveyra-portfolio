import { Asset } from "contentful";
import React from "react";
import Image from "next/image";
import { getHomeImage } from "../../services/api";
import styles from "./index.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

interface HomeImageProps {
  homeImage: Asset;
}

function HomeImage({ homeImage }: HomeImageProps) {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Image
      className={styles.image}
      layout="fill"
      objectFit="cover"
      src={"https:" + homeImage.fields.file.url}
      alt="home"
      objectPosition={mobile ? "70%" : "center"}
    ></Image>
  );
}

export default HomeImage;
