import React from "react";
import styles from "./index.module.css";

import Layout from "../../components/Layout";

export default function NotFound() {
  return (
    <div>
      <Layout>
        <div className={styles.container}>404 - No existe esta página</div>
      </Layout>
    </div>
  );
}
