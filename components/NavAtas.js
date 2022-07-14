import { useRef } from "react";
import Link from "next/link";
import { Logo } from "../components/Icons";
import { Search, Close } from "../components/Icons";
import styles from "./styles/NavAtas.module.css";

export default function NavAtas() {
  const popupSearchRef = useRef();
  const inputSearchRef = useRef();
  function handleClick() {
    popupSearchRef.current.classList.toggle("aktif");
    inputSearchRef.current.focus();
  }

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Logo width={107} height={60} />
            </a>
          </Link>
        </div>
        <div className={styles.search}>
          <Search onClick={handleClick} />
          <PopupSearch refer={popupSearchRef} referInput={inputSearchRef} />
        </div>
      </div>
    </div>
  );
}

function PopupSearch({ refer, referInput }) {
  function handleClick() {
    refer.current.classList.toggle("aktif");
  }

  return (
    <div className={styles.popupSearch} ref={refer}>
      <form action="/search" className={styles.searchForm}>
        <input
          ref={referInput}
          type="text"
          name="judul"
          className={styles.searchInput}
          autoComplete="off"
        />
        <Close classTambahan={styles.searchIcon} onClick={handleClick} />
      </form>
    </div>
  );
}
