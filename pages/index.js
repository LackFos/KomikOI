import Head from "next/head";
import Link from "next/link";

import Slideshow from "../components/SlideShow";
import Layout from "../components/layout";
import { Chevron as ChevronRight } from "../components/Icons";
import Thumbnails from "../components/Thumbnails";

import useMediaQuery from "../libs/mediaquery";

import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  return {
    props: {
      Data: [
        {
          judul: "Spare Me, Great Lord !",
          foto: "cover.jpg",
          link: "spare-me-great-lord",
        },
        { judul: "Yuan Zun", foto: "cover2.jpg", link: "yuan-zun" },
        {
          judul: "Wo Shi Da Shen Xian",
          foto: "cover3.jpg",
          link: "wo-shi-da-shen-xian",
        },
      ],
      DataSlideshow: [
        {
          judul: "Spare Me, Great Lord !",
          foto: "cover.jpg",
          link: "spare-me-great-lord",
        },
        { judul: "Yuan Zun", foto: "cover2.jpg", link: "yuan-zun" },
        {
          judul: "Wo Shi Da Shen Xian",
          foto: "cover3.jpg",
          link: "wo-shi-da-shen-xian",
        },
      ],
    },
  };
}

export default function Home({ Data, DataSlideshow }) {
  const isTablet = useMediaQuery("(min-width: 768px)");
  let SlideshowConfig = {
    slidesPerView: 1,
    navigation: false,
  };
  isTablet &&
    (SlideshowConfig = {
      slidesPerView: 1.5,
      navigation: true,
    });
  return (
    <div className={styles.container}>
      <Head>
        <title>KomikOI | Baca Manga, Manhua, Manhwa Bahasa Indonesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Slideshow
          DataSlideshow={DataSlideshow}
          SlideshowConfig={SlideshowConfig}
        />
        <section className={styles.KontenBox}>
          <Header />
          <Thumbnails data={Data} />
        </section>
      </Layout>
    </div>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <h1>Komik Populer</h1>
      <Link href="/">
        <a className={styles.tombolLagi}>
          <span>Lagi</span>
          <ChevronRight width={10} viewBox="1 4 15 15" />
        </a>
      </Link>
    </div>
  );
}
