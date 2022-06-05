import React, { useState, useRef } from "react";

import SingleSelectionMenu from "../libs/singleSelectionMenu";
import MutipleSelectionMenu from "../libs/mutipleSelectionMenu";
import BorderBottomMenu from "../components/menu/borderBottom";
import Thumbnails from "../components/Thumbnails";

import FillBorderMenu from "../components/menu/fillBorder";
import Layout from "../components/layout";
import { Triangle } from "../components/Icons";

import styles from "../styles/searchPage.module.css";

const MemorizeMenuGenre = React.memo(MenuGenre);
const MemorizeMenuTipeKomik = React.memo(MenuTipeKomik);

export default function Genres() {
  const [tipeKomik, setTipeKomik] = useState("Semua");
  const [genres, setGenre] = useState(new Set([]));

  const dataSementara = [
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
  ];

  return (
    <Layout>
      <div className={styles.menuWrapper}>
        <div className={styles.menu}>
          <MemorizeMenuGenre setState={setGenre} />
          <MemorizeMenuTipeKomik setState={setTipeKomik} activeIndex={0} />
          <div className="hr" />
          <div className={`${styles.tombolSearch} no-select`}>Cari</div>
        </div>
        <Header length={dataSementara.length} />
        <Thumbnails data={dataSementara} />
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
