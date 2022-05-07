import styles from "./styles/fillBorder.module.css";

export default function fillBorder({ text, onClick }) {
  return (
    <div className={`${styles.main}`} onClick={onClick}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
