import React from "react";
import Layout from "../../components/Layout";
import { getBioByEntryId } from "../../services/api";
import { Entry } from "contentful";
import styles from "./index.module.css";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BioProps {
  data: Entry<any>;
}

function Bio({ data }: BioProps) {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Layout>
      <div className={styles.bioContainer}>
        <div className={styles.container}>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>
              {documentToReactComponents(data.fields.parrafoArriba)}
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              unoptimized
              src={"https:" + data.fields.foto1.fields.file.url}
              alt="foto1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.container}>
          {!mobile && (
            <div className={styles.imageContainer}>
              <Image
                unoptimized
                src={"https:" + data.fields.foto2.fields.file.url}
                alt="foto1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>
              {documentToReactComponents(data.fields.parrafoAbajo)}
            </p>
            {mobile && (
              <div className={styles.imageContainer}>
                <Image
                  unoptimized
                  src={"https:" + data.fields.foto2.fields.file.url}
                  alt="foto1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <Image
              unoptimized
              src={"/firma.jpg"}
              alt="foto1"
              layout="intrinsic"
              objectFit="cover"
              height={"55px"}
              width={"198px"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await getBioByEntryId();

  return {
    props: { data },
  };
}

export default Bio;