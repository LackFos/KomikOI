import Link from "next/link";
import { Chevron as ChevronRight } from "../components/Icons";
import styles from "../styles/components/ListHeader.module.css";

export default function Header({ teks = "No Name", href = "/" }) {
  return (
    <div className={styles.main}>
      <h1>{teks}</h1>
      <Link href={href}>
        <a className={styles.moreButton}>
          <span>Lagi</span>
          <ChevronRight width={10} viewBox="1 4 15 15" />
        </a>
      </Link>
    </div>
  );
}
