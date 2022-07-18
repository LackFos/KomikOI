import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../components/Icons";
import { Search, Close } from "../components/Icons";
import styles from "./styles/NavAtas.module.css";

const MemorizeSearch = React.memo(Search);
const MemorizeClose = React.memo(Close);

export default function NavAtas() {
  const popupSearchRef = useRef();
  const inputSearchRef = useRef();

  function handleClick() {
    popupSearchRef.current.classList.toggle("aktif");
    inputSearchRef.current.focus();
  }

  function onClickClose() {
    popupSearchRef.current.classList.toggle("aktif");
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
          <MemorizeSearch onClick={handleClick} />
          <PopupSearch
            onClickClose={onClickClose}
            refer={popupSearchRef}
            referInput={inputSearchRef}
          />
        </div>
      </div>
    </div>
  );
}

function PopupSearch({ onClickClose, refer, referInput }) {
  const maxHistoryShowed = 10;
  const [searchHistory, setSearchHistory] = useState([]);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: { judul: event.target.judul.value },
    });
    if (event.target.judul.value.length < 5) return 0;
    saveHistory(event);
  }

  useEffect(() => {
    // Fetch History Dari LocalHost
    const fetchHistory = JSON.parse(localStorage.getItem("history"));
    fetchHistory != null && setSearchHistory(fetchHistory);
  }, [true]);

  // Set Value Histori Ke LocalStorage
  searchHistory.length != 0 &&
    localStorage.setItem("history", JSON.stringify(searchHistory));

  function saveHistory(e) {
    // Value Input(JUDUL_KOMIK)
    const inputValue = e.target.judul.value;

    // Jika LocalStorage(History) Kosong, BIKIN BARU
    if (searchHistory.length == 0) {
      setSearchHistory([inputValue]);
      localStorage.setItem("history", JSON.stringify([inputValue]));
      return;
    }

    // Tambahakan Baru hapus yang Lama Jika Lenght Array Mencapai Maks
    searchHistory.length >= maxHistoryShowed && searchHistory.pop();

    // Tambahakan Input Jika Value Unik
    if (searchHistory.indexOf(inputValue) == -1) {
      setSearchHistory((prev) => [inputValue, ...prev]);
    }
  }

  return (
    <div className={styles.popupSearch} ref={refer}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          ref={referInput}
          type="text"
          name="judul"
          className={styles.searchInput}
          autoComplete="off"
          minLength={5}
        />
        <MemorizeClose
          classTambahan={styles.searchIcon}
          onClick={onClickClose}
        />
      </form>
      <SearchHistoryList Datas={searchHistory} />
    </div>
  );
}

function SearchHistoryList({ Datas }) {
  const historyElement =
    // Jika Tidak Ada Data
    Datas.length == 0 ? (
      <li>Tidak Ada Histori</li>
    ) : (
      // Jika Ada Data
      Array.from(Datas).map((data, index) => {
        return (
          <li key={index} className="no-select">
            <Link href={`/search?judul=${data}`}>{data}</Link>
          </li>
        );
      })
    );

  return <ul className={styles.historyList}>{historyElement}</ul>;
}
