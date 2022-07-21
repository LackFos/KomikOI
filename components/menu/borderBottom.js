import styles from "../../styles/Menu/BorderBottom.module.css";

export default function BorderBottom({ text }) {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
