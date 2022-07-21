import styles from "../../styles/Menu/FillText.module.css";

export default function FillText({ text }) {
  return (
    <div className={`${styles.main} fillTextMenu`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
