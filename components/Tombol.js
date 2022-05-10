import Link from "next/link";
import React from "react";
import styles from "./styles/tombol.module.css";

const MemorizeLink = React.memo(Link);

export default function Tombol({
  text,
  destination = "404",
  color,
  className = "",
}) {
  const colorPallete = { oren: "#FE9D10", biru: "#32aaff" };
  return (
    <MemorizeLink href={`/${destination}`}>
      <a
        className={` ${className} ${styles.main}`}
        style={{ background: colorPallete[color] }}
      >
        {text}
      </a>
    </MemorizeLink>
  );
}
