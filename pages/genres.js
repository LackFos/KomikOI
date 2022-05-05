import { useState } from "react";

import SingleSelectionMenu from "../contexts/singleSelectionMenu";
import MutipleSelectionMenu from "../contexts/mutipleSelectionMenu";
import BorderBottomMenu from "../components/menu/borderBottom";
import FillBorderMenu from "../components/menu/fillBorder";
import Layout from "../components/layout";
import styles from "../styles/genresPage.module.css";

export default function Genres() {
  const [tipeKomik, setTipeKomik] = useState(0);
  const [genres, setGenre] = useState(new Set([0]));
  console.log(genres);
  return (
    <Layout>
      <div className={styles.menuWrapper}>
        <div className={styles.menu}>
          <SingleSelectionMenu
            classTambahan={styles.Menu_tipeKomik}
            setState={setTipeKomik}
          >
            <BorderBottomMenu text="Semua" />
            <BorderBottomMenu text="Manga" />
            <BorderBottomMenu text="Manhua" />
            <BorderBottomMenu text="Manhwa" />
          </SingleSelectionMenu>

          <div className="br" />
          <MutipleSelectionMenu
            setState={setGenre}
            classTambahan={styles.Menu_genreSelection}
          >
            <FillBorderMenu text="Semua" />
            <FillBorderMenu text="Aksi" />
            <FillBorderMenu text="Adult" />
            <FillBorderMenu text="Drama" />
            <FillBorderMenu text="Ecchi" />
            <FillBorderMenu text="Fantasi" />
            <FillBorderMenu text="Gender Bender" />
            <FillBorderMenu text="Harem" />
            <FillBorderMenu text="Historis" />
            <FillBorderMenu text="Horror" />
            <FillBorderMenu text="Isekai" />
            <FillBorderMenu text="Komedi" />
            <FillBorderMenu text="Kultivasi" />
            <FillBorderMenu text="Martial Arts" />
            <FillBorderMenu text="Mecha" />
            <FillBorderMenu text="Metropolis" />
            <FillBorderMenu text="Misteri" />
            <FillBorderMenu text="Murim" />
            <FillBorderMenu text="Romantis" />
            <FillBorderMenu text="School life" />
            <FillBorderMenu text="Sci fi" />
            <FillBorderMenu text="Slice of life" />
            <FillBorderMenu text="Olahraga" />
            <FillBorderMenu text="Supernatural" />
            <FillBorderMenu text="Zombie" />
          </MutipleSelectionMenu>
        </div>
      </div>
    </Layout>
  );
}
