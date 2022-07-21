import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/ThumbnailList.module.css";

export default function ThumbnailList({ Data }) {
  const card = Data.map((value) => {
    return (
      <Link href={`/detail/${value.link}`} key={value.judul}>
        <a className={styles.main}>
          <div className={styles.ImageBox}>
            <Image
              className={styles.Image}
              src={`/images/${value.foto}`}
              layout="fill"
              alt="yuanzun"
            />
          </div>
          <div className={styles.description}>
            <div className={styles.infoTitle}>{value.judul}</div>
          </div>
        </a>
      </Link>
    );
  });

  return <div className={styles.List}>{card}</div>;
}
