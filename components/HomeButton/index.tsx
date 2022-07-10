import React from "react";
import styles from "./index.module.css";

interface HomeButtonProps {
  children: string;
}

export default function HomeButton({ children }: HomeButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
