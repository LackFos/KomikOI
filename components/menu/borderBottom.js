import styles from "./styles/borderBottom.module.css";

export default function BorderBottom({ text }) {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
