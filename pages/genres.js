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

function MenuGenre({ setState }) {
  const listGenres = [
    "Aksi",
    "Adult",
    "Drama",
    "Ecchi",
    "Fantasi",
    "Gender Bender",
    "Harem",
    "Sejarah",
    "Horror",
    "Isekai",
    "Komedi",
    "Kultivasi",
    "Bela Diri",
    "Mecha",
    "Metropolis",
    "Misteri",
    "Murim",
    "Romantis",
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
    <MutipleSelectionMenu
      setState={setState}
      classTambahan={styles.Menu_genreSelection}
    >
      {TombolGenres}
    </MutipleSelectionMenu>
  );
}

function MenuTipeKomik({ setState, activeIndex }) {
  const listTipeKomik = ["Semua", "Manga", "Manhua", "Manhwa"];

  const TombolTipeKomik = listTipeKomik.map((value) => {
    return <BorderBottomMenu key={value} text={value} />;
  });

  return (
    <SingleSelectionMenu
      activeIndex={activeIndex}
      classTambahan={styles.Menu_tipeKomik}
      setState={setState}
    >
      {TombolTipeKomik}
    </SingleSelectionMenu>
  );
}
