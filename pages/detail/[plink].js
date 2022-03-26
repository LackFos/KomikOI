import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/detail.module.css";

import Layout from "../../components/layout";

export default function Detail() {
  const router = useRouter();
  const { plink } = router.query;
  return (
    <Layout>
      <div className={styles.banner}>
        <div className={styles.bannerImage}>
          <Image
            src={`/images/cover.jpg`}
            layout="fill"
            objectFit="cover"
            alt="yuanzun"
            priority={true}
          />
        </div>
        <div className={styles.infoKonten}>
          <h2 className={styles.infoTitle}>Spare, Me Great Lord</h2>
          <div className={styles.infoTipe}>Manhua</div>
        </div>
      </div>
    </Layout>
  );
}
