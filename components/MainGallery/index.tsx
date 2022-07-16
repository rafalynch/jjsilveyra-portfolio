import Image from "next/image";
import React, { useState } from "react";
import { Painting } from "../../types";
import styles from "./index.module.css";
import PaintingCard from "../PaintingCard";
import { Box } from "@mui/material";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import PaintingModal from "../PaintingModal";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MainGalleryProps {
  paintings: Painting[];
}

export default function MainGallery({ paintings }: MainGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState();

  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <PaintingModal
        selectedPaint={selectedPainting}
        isOpen={isModalOpen}
        handleToggle={handleToggle}
      />
      <Box sx={{ padding: "15px" }}>
        <ImageList cols={mobile ? 1 : 4} sx={{ padding: "15px" }} gap={20}>
          {paintings.map((item, index) => (
            <ImageListItem key={index}>
              <PaintingCard
                handleToggleModal={handleToggle}
                handleSelectPainting={setSelectedPainting}
                painting={item}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
