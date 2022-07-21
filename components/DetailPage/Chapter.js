import { useRef, useContext } from "react";
import { DetailContext } from "../../pages/detail/[JudulKomik]";
import FillText from "../../components/menu/Filltext";
import stylesDetailPage from "../../styles/detailPage.module.css";
import styles from "../../styles/DetailPage/Chapter.module.css";
import SingleSelectionMenu from "../../libs/singleSelectionMenu";

export default function Chapter() {
  const chapterBoxRef = useRef();
  const DataChapter = useContext(DetailContext).DataChapter;

  const handleChange = (value) => {
    chapterBoxRef.current.classList.remove("Turun");
    chapterBoxRef.current.classList.remove("Naik");
    chapterBoxRef.current.classList.add(value);
  };

  const ElemenItems = DataChapter.map((value, index) => {
    return (
      <li className={styles.Items} key={index}>
        <div className={styles.chapter}>{value.judul}</div>
        <div className={styles.tanggalRilis}>{value.tanggal}</div>
      </li>
    );
  });

  return (
    <div className={stylesDetailPage.chapter}>
      <div className={styles.Sort}>
        <div className={styles.totalChapter}>
          Total {DataChapter.length} Chapter
        </div>
        <SingleSelectionMenu
          indexKey={1}
          activeIndex={2}
          customOnChange={handleChange}
          classTambahan={styles.sortMenu}
        >
          <FillText text="Naik" classTambahan={styles.tombolSort} />
          <div className="hr" exclude={1} />
          <FillText text="Turun" classTambahan={styles.tombolSort} />
        </SingleSelectionMenu>
      </div>
      <ul className={`${styles.List} Turun`} ref={chapterBoxRef}>
        {ElemenItems}
      </ul>
    </div>
  );
}
