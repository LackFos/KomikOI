import Link from "next/link";
import React from "react";
import styles from "../styles/components/Tombol.module.css";

const MemorizeLink = React.memo(Link);

export default function Tombol({ text, href = "404", color, className = "" }) {
  const colorPallete = { oren: "#FE9D10", biru: "#32aaff" };
  return (
    <MemorizeLink href={`/${href}`}>
      <a
        className={` ${className} ${styles.main}`}
        style={{ background: colorPallete[color] }}
      >
        {text}
      </a>
    </MemorizeLink>
  );
}
