import styles from "./styles/fillBorder.module.css";

export default function fillBorder({ text }) {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
