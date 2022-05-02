import styles from "./styles/borderBottom.module.css";

export default function BorderBottom({ text, onClick }) {
  return (
    <div className={styles.main} onClick={onClick}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
