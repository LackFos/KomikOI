import Image from "next/image";
import { Search } from "../components/Icons";
import styles from "./styles/NavAtas.module.css";

export default function NavAtas() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" layout="fill" quality="100" />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
    </div>
  );
}
