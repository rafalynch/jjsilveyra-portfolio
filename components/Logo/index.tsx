import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={styles.container}>
      <Link href={"/gallery"} passHref>
        <h1 className={styles.title}>JJSILVEYRA</h1>
      </Link>
      <h3 className={styles.subtitle}>ARTISTA</h3>
    </div>
  );
}
