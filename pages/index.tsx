import { Asset } from "contentful";
import Head from "next/head";
import { getHomeImage } from "../services/api";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import HomeImage from "../components/HomeImage";
import Logo from "../components/Logo";
import HomeButton from "../components/HomeButton";

interface HomeProps {
  homeImage: Asset;
}

function Home({ homeImage }: HomeProps) {
  return (
    <div
      className={styles.container}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <main className={styles.main}>
        <div className={styles.logo_container}>
          <Logo />
          <HomeButton />
        </div>
        <HomeImage homeImage={homeImage}></HomeImage>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const homeImage = await getHomeImage();

  return {
    props: { homeImage },
  };
}

export default Home;
