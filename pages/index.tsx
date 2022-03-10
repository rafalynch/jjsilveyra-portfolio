import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JJSilveyra</title>
        <meta name="description" content="Artist" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
