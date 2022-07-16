import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

export default function HomeButton() {
  return (
    <Link href={"/gallery"} passHref>
      <h3 className={styles.button}>OBRAS</h3>
    </Link>
  );
}
