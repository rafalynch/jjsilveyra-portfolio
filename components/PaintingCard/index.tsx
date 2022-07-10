import Image from "next/image";
import React from "react";
import { Painting } from "../../types";

import styles from "./index.module.css";

interface PaintingCardProps {
  painting: Painting;
  handleSelectPainting: any;
  handleToggleModal: any;
}

export default function PaintingCard({
  painting,
  handleSelectPainting,
  handleToggleModal,
}: PaintingCardProps) {
  const handleClick = () => {
    handleSelectPainting(painting);
    handleToggleModal();
  };

  return (
    <Image
      onClick={handleClick}
      className={styles.image}
      width={painting.image.width}
      height={painting.image.height}
      src={"https:" + painting.image.url}
      alt={painting.title}
    ></Image>
  );
}
