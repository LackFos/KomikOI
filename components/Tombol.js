import styles from "./styles/tombol.module.css";
import Link from "next/link";

export default function Tombol({
  children,
  link = "404",
  color,
  className = "",
}) {
  const colorPallete = { oren: "#FE9D10", biru: "#32aaff" };
  return (
    <Link href={`/${link}`}>
      <div
        className={` ${className} ${styles.main}`}
        style={{ background: colorPallete[color] }}
      >
        {children}
      </div>
    </Link>
  );
}
