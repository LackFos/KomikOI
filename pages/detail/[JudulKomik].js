import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import classToggle from "../../contexts/classtoggle";
import styles from "../../styles/detailPage.module.css";
import Tombol from "../../components/Tombol";
import Layout from "../../components/layout";

export default function Detail() {
  const router = useRouter();
  const { JudulKomik } = router.query;
  const [menuSelection, setMenuSelection] = useState(1);

  const dataSementara = [
    { judul: "", tanggal: "10/12/2022" },
    { judul: "", tanggal: "10/12/2022" },
    { judul: "", tanggal: "10/12/2022" },
    { judul: "", tanggal: "10/12/2022" },
  ];

  return (
    <>
      <Head>
        <title>KomikOI | Baca Manga, Manhua, Manhwa Bahasa Indonesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <Menu states={[menuSelection, setMenuSelection]} />
        <Chapter />
        <section></section>
      </Layout>
    </>
  );
}

function Banner() {
  return (
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
  );
}

function Menu({ states }) {
  const [menuSelection, setMenuSelection] = states;

  const toggleChapter = classToggle(menuSelection);
  const toggleSinopsis = classToggle(!menuSelection);

  // OnClick (Tombol Chapter)
  const handleTombolChapter = () => setMenuSelection(1);

  // OnClick (Tombol Sinopsis)
  const handleTombolSinopsis = () => setMenuSelection(0);

  return (
    <div className={styles.menu}>
      <div
        className={`${styles.tombolMenu} ${toggleSinopsis}  no-select`}
        onClick={handleTombolSinopsis}
      >
        <span className={styles.textTombol}>Sinopsis</span>
      </div>
      <div
        className={`${styles.tombolMenu} ${toggleChapter} no-select`}
        onClick={handleTombolChapter}
      >
        <span className={styles.textTombol}>Chapter</span>
      </div>
    </div>
  );
}

function Chapter() {
  const [isASC, setSort] = useState(0);
  const toggleASC = classToggle(isASC);
  const toggleDESC = classToggle(!isASC);

  const handleASC = () => setSort(1);
  const handleDESC = () => setSort(0);

  return (
    <div className={styles.chapterBox}>
      <div className={styles.Sort}>
        <div className={styles.totalChapter}>Total 4 Chapter</div>
        <div className={`${styles.sortMenu} no-select`}>
          <div className={`ASC ${toggleASC}`} onClick={handleASC}>
            <span className={styles.sortType}>Naik</span>
          </div>
          <span className="hr" />
          <div className={`DESC ${toggleDESC}`} onClick={handleDESC}>
            <span className={styles.sortType}>Turun</span>
          </div>
        </div>
      </div>
      <div className={styles.chapterList}>
        <li className={styles.Items}>
          <div className={styles.chapter}>Chapter 4</div>
          <div className={styles.tanggalRilis}>18/10/2022</div>
        </li>
        <li className={styles.Items}>
          <div className={styles.chapter}>Chapter 3</div>
          <div className={styles.tanggalRilis}>18/10/2022</div>
        </li>
        <li className={styles.Items}>
          <div className={styles.chapter}>Chapter 2</div>
          <div className={styles.tanggalRilis}>18/10/2022</div>
        </li>
        <li className={styles.Items}>
          <div className={styles.chapter}>Chapter 1</div>
          <div className={styles.tanggalRilis}>18/10/2022</div>
        </li>
      </div>
    </div>
  );
}
