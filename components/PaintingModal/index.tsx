import * as React from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Painting } from "../../types";
import { Modal } from "@mui/material";
import Image from "next/image";

import styles from "./index.module.css";

interface PaintingModalProps {
  selectedPaint?: Painting;
  isOpen: boolean;
  handleToggle: any;
}

export default function PaintingModal(props: PaintingModalProps) {
  return (
    <div>
      <Modal
        className={styles.modalContainer}
        onClose={props.handleToggle}
        open={props.isOpen}
      >
        <div className={styles.modal} data-aos="zoom-in">
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={"https:" + props.selectedPaint?.image.url}
              alt={props.selectedPaint?.title}
              height={props.selectedPaint?.image.height}
              width={props.selectedPaint?.image.width}
              layout="responsive"
            />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.paintTitle}>{props.selectedPaint?.title}</p>
            <p className={styles.paintType}>{props.selectedPaint?.type}</p>
            <p className={styles.paintSize}>{props.selectedPaint?.size}</p>
            <p className={styles.paintYear}>{props.selectedPaint?.year}</p>
            {props.selectedPaint?.isAvailable ? (
              <>
                <p className={styles.available}>DISPONIBLE</p>
              </>
            ) : (
              <>
                <p className={styles.sold}>VENDIDO</p>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
