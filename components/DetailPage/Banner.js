import Image from "next/image";
import Tombol from "../Tombol";
import styles from "../../styles/DetailPage/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.main}>
      <div className={styles.Image}>
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
          <Tombol
            className={styles.genreBox}
            text="Aksi"
            href="search?genre=Aksi"
          />
          <Tombol
            className={styles.genreBox}
            text="Fantasi"
            href="search?genre=Aksi"
          />
          <Tombol
            className={styles.genreBox}
            text="Kultivasi"
            href="search?genre=Aksi"
          />
        </div>
      </div>
    </div>
  );
}
