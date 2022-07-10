import React from "react";

import styles from "./index.module.css";
import Logo from "../Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar></Navbar>
    </div>
  );
}
