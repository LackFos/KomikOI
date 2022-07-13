import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import SingleSelectionMenu from "../libs/singleSelectionMenu";
import MutipleSelectionMenu from "../libs/mutipleSelectionMenu";

import Thumbnails from "../components/Thumbnails";
import FillBorderMenu from "../components/menu/fillBorder";
import Layout from "../components/layout";
import { Triangle } from "../components/Icons";

import styles from "../styles/searchPage.module.css";

const MemorizeMenuGenre = React.memo(MenuGenre);
const MemorizeMenuTipeKomik = React.memo(MenuTipeKomik);
const MemorizeThumbnails = React.memo(Thumbnails);
const MemorizeHeader = React.memo(Header);

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
    },
  };
}

export default function Genres({ Data }) {
  const [tipeKomik, setTipeKomik] = useState("Semua");
  const [genresKomik, setGenre] = useState(new Set([]));
  const onSelect = tipeKomik != "Semua" || genresKomik.size > 0;
  const disableLogic = !onSelect ? "disable" : "";

  const generatedLink = linkGenerator(tipeKomik, genresKomik);

  const router = useRouter();
  const { tipe, genres } = router.query;
  const onSearch = tipe != undefined || genres != undefined;

  console.log(onSearch);

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.menu}>
          <MemorizeMenuGenre setState={setGenre} />
          <MemorizeMenuTipeKomik setState={setTipeKomik} activeIndex={0} />
          <div className="hr" />
        </div>
        <div
          className={`${styles.tombolSearchWrapper} ${disableLogic} no-select`}
        >
          <Link href={generatedLink}>
            <div className={styles.tombolSearch}>Cari</div>
          </Link>
        </div>
        <div className={styles.thumbnailWrapper}>
          {onSearch && <MemorizeHeader length={Data.length} />}
          {!onSearch && (
            <div className={styles.alertBox}>Belum Ada Penelusuran</div>
          )}
          {onSearch && <MemorizeThumbnails data={Data} />}
        </div>
      </div>
    </Layout>
  );
}

function MenuTipeKomik({ setState, activeIndex }) {
  const listTipeKomik = ["Semua", "Manga", "Manhua", "Manhwa"];

  const TombolTipeKomik = listTipeKomik.map((value) => {
    return (
      <FillBorderMenu
        classTambahan={styles.tombolTipeKomik}
        key={value}
        text={value}
      />
    );
  });

  return (
    <div className="tipeKomikWrapper">
      <SingleSelectionMenu
        activeIndex={activeIndex}
        classTambahan={styles.tipeKomik}
        setState={setState}
      >
        {TombolTipeKomik}
      </SingleSelectionMenu>
    </div>
  );
}

function MenuGenre({ setState }) {
  const listGenres = [
    "Aksi",
    "Fantasi",
    "Harem",
    "Isekai",
    "Kultivasi",
    "Bela Diri",
    "Metropolis",
    "Murim",
    "Romantis",
    "Adult",
    "Drama",
    "Ecchi",
    "Gender Bender",
    "Sejarah",
    "Horror",
    "Komedi",
    "Mecha",
    "Misteri",
    "School life",
    "Sci fi",
    "Slice of life",
    "Olahraga",
    "Supernatural",
    "Zombie",
  ];

  const tipeGenreWrapperEl = useRef();
  const TeksLebihBanyakEl = useRef();

  const handleClick = () => {
    TeksLebihBanyakEl.current.innerHTML == "Lebih Banyak"
      ? (TeksLebihBanyakEl.current.innerHTML = "Lebih Sedikit")
      : (TeksLebihBanyakEl.current.innerHTML = "Lebih Banyak");
    tipeGenreWrapperEl.current.classList.toggle("all");
  };

  const TombolGenres = listGenres.map((value) => {
    return (
      <FillBorderMenu
        key={value}
        text={value}
        classTambahan={styles.tombolGenre}
      />
    );
  });

  return (
    <div className={styles.tipeGenreWrapper} ref={tipeGenreWrapperEl}>
      <MutipleSelectionMenu
        setState={setState}
        classTambahan={styles.tipeGenre}
      >
        {TombolGenres}
      </MutipleSelectionMenu>
      <div className={styles.lebihBanyak} onClick={handleClick}>
        <span ref={TeksLebihBanyakEl}>Lebih Banyak</span>
        <Triangle width={10} classTambahan={styles.lebihBanyakIcon} />
      </div>
      <div className="hr" />
    </div>
  );
}

function Header({ length }) {
  return (
    <div className={styles.header}>
      <h3>{`Terdapat ${length} Hasil`}</h3>
    </div>
  );
}

function linkGenerator(tipeKomik, genres) {
  const genreTerpilih = Array.from(genres).map((value) =>
    value.split(" ").join("")
  );
  const genreParameter = genreTerpilih.join("_");
  const genreURLString = genreParameter ? `&genres=${genreParameter}` : "";
  return `?tipe=${tipeKomik}${genreURLString}`.toLocaleLowerCase();
}
