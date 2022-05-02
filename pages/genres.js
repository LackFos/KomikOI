import SingleSelectionMenu from "../contexts/singleSelectionMenu";
import BorderBottomMenu from "../components/menu/borderBottom";
import Layout from "../components/layout";
import styles from "../styles/genresPage.module.css";

export default function genres() {
  return (
    <Layout>
      <div className={styles.menuWrapper}>
        <div className={styles.menu}>
          <SingleSelectionMenu>
            <BorderBottomMenu text="Semua" />
            <BorderBottomMenu text="Manga" />
            <BorderBottomMenu text="Manhua" />
            <BorderBottomMenu text="Manhwa" />
          </SingleSelectionMenu>
        </div>
      </div>
    </Layout>
  );
}
