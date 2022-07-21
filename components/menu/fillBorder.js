import styles from "../../styles/Menu/FillBorder.module.css";

export default function fillBorder({ text }) {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
