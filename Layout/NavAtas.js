import { useRef, useState, useEffect, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "../libs/mediaquery";
import { Logo } from "../components/Icons";
import { Search, Close } from "../components/Icons";
import styles from "./NavAtas.module.css";

const MemorizeSearch = memo(Search);
const MemorizePopupSearch = memo(PopupSearch);
const MemorizeSearchHistoryList = memo(SearchHistoryList);
const MemorizeClose = memo(Close);

export default function NavAtas() {
  const popupSearchRef = useRef();
  const inputSearchRef = useRef();

  function handleClick() {
    inputSearchRef.current.focus();
  }

  function handleFocus() {
    popupSearchRef.current.classList.add("aktif");
  }

  function handleBlur() {
    popupSearchRef.current.classList.remove("aktif");
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
          <MemorizePopupSearch
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            refer={popupSearchRef}
            referInput={inputSearchRef}
          />
        </div>
      </div>
    </div>
  );
}

function PopupSearch({ handleBlur, handleFocus, refer, referInput }) {
  const maxHistoryShowed = 10;
  const [searchHistory, setSearchHistory] = useState([]);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    refer.current.classList.remove("aktif");
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

  const isTablet = useMediaQuery("(min-width: 768px)");

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
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isTablet && <MemorizeClose classTambahan={styles.searchIcon} />}
      </form>
      <MemorizeSearchHistoryList Datas={searchHistory} />
    </div>
  );
}

function SearchHistoryList({ Datas }) {
  const router = useRouter();
  function handleMouseDown(e, href) {
    router.push({
      pathname: "/search",
      query: { judul: href },
    });
  }
  const historyElement =
    // Jika Tidak Ada Data
    Datas.length == 0 ? (
      <li className={styles.noHistory}>Tidak Ada Histori</li>
    ) : (
      // Jika Ada Data
      Array.from(Datas).map((data, index) => {
        return (
          <li
            key={index}
            className="no-select"
            onMouseDown={(event) => handleMouseDown(event, data)}
          >
            {data}
          </li>
        );
      })
    );

  return <ul className={styles.historyList}>{historyElement}</ul>;
}
