import { useContext } from "react";
import { DetailContext } from "../../pages/detail/[JudulKomik]";
import BorderBottomMenu from "../../components/Menu/BorderBottom";
import styles from "../../styles/DetailPage/Menu.module.css";
import SingleSelectionMenu from "../../libs/singleSelectionMenu";

export default function Menu() {
  const kontenBoxRef = useContext(DetailContext).kontenBoxRef;

  const handleChange = (value) => {
    kontenBoxRef.current.classList.remove("Chapter");
    kontenBoxRef.current.classList.remove("Sinopsis");
    kontenBoxRef.current.classList.add(value);
  };

  return (
    <SingleSelectionMenu
      activeIndex={1}
      classTambahan={styles.main}
      customOnChange={handleChange}
    >
      <BorderBottomMenu classTambahan={styles.tombol} text="Sinopsis" />
      <BorderBottomMenu classTambahan={styles.tombol} text="Chapter" />
    </SingleSelectionMenu>
  );
}
