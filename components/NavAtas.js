import Link from "next/link";
import { Logo } from "../components/Icons";
import { Search } from "../components/Icons";
import styles from "./styles/NavAtas.module.css";

export default function NavAtas() {
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
          <Search />
        </div>
      </div>
    </div>
  );
}
