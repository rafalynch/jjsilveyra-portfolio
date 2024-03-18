import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "./index.module.css";

export default function Collections() {
  return (
    <>
      <Layout>
        <>
          <div className={styles.container}>
            <Link
              href={"https://www.instagram.com/jj.silveyra/?hl=es"}
              passHref
            >
              <div className={styles.social}>
                <Image
                  unoptimized
                  layout="fill"
                  src="/instagram.png"
                  alt="instagram"
                />
              </div>
            </Link>
            <Link
              href={"https://www.instagram.com/jj.silveyra/?hl=es"}
              passHref
            >
              <h3 className={styles.label}>{"@jj.silveyra"}</h3>
            </Link>
          </div>
          <div className={styles.container}>
            <Link href={"mailto:javierjsilveyra@gmail.com"} passHref>
              <div className={styles.social}>
                <Image
                  unoptimized
                  layout="fill"
                  src="/email.png"
                  alt="instagram"
                />
              </div>
            </Link>
            <Link href={"mailto:javierjsilveyra@gmail.com"} passHref>
              <h3 className={styles.label}>{"javierjsilveyra@gmail.com"}</h3>
            </Link>
          </div>
        </>
      </Layout>
    </>
  );
}
