import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/detailPage.module.css";

import Tombol from "../../components/Tombol";
import { Star } from "../../components/Icons";
import Layout from "../../components/layout";

export default function Detail() {
  const router = useRouter();
  const { plink } = router.query;
  return (
    <>
      <Head>
        <title>KomikOI | Baca Manga, Manhua, Manhwa Bahasa Indonesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.banner}>
          <div className={styles.bannerImage}>
            <Image
              src={`/images/cover.jpg`}
              layout="fill"
              objectFit="cover"
              alt="yuanzun"
              priority={true}
            />
          </div>
          <div className={styles.infoKonten}>
            <h2 className={styles.infoJudul}>Spare, Me Great Lord</h2>
            <div className={styles.infoGenre}>
              <Tombol className={styles.genreBox}>Aksi</Tombol>
              <Tombol className={styles.genreBox}>Fantasi</Tombol>
              <Tombol className={styles.genreBox}>Kultivasi</Tombol>
            </div>
          </div>
        </div>
        <section></section>
      </Layout>
    </>
  );
}
