import React, { useState } from "react";

import SingleSelectionMenu from "../libs/singleSelectionMenu";
import MutipleSelectionMenu from "../libs/mutipleSelectionMenu";
import BorderBottomMenu from "../components/menu/borderBottom";
import FillBorderMenu from "../components/menu/fillBorder";
import Layout from "../components/layout";
import styles from "../styles/genresPage.module.css";

const MemorizeMenuGenre = React.memo(MenuGenre);
const MemorizeMenuTipeKomik = React.memo(MenuTipeKomik);

export default function Genres() {
  const [tipeKomik, setTipeKomik] = useState("Semua");
  const [genres, setGenre] = useState(new Set([]));
  return (
    <Layout>
      <div className={styles.menuWrapper}>
        <div className={styles.menu}>
          <MemorizeMenuTipeKomik setState={setTipeKomik} activeIndex={0} />
          <div className="br" />
          <MemorizeMenuGenre setState={setGenre} />
        </div>
      </div>
    </Layout>
  );
}

function MenuTipeKomik({ setState, activeIndex }) {
  const listTipeKomik = ["Semua", "Manga", "Manhua", "Manhwa"];

  const TombolTipeKomik = listTipeKomik.map((value) => {
    return (
      <BorderBottomMenu
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
    <div className={styles.tipeGenreWrapper}>
      <MutipleSelectionMenu
        setState={setState}
        classTambahan={styles.tipeGenre}
      >
        {TombolGenres}
      </MutipleSelectionMenu>
      <div className={styles.lebihBanyak}>Lebih Banyak</div>
    </div>
  );
}
