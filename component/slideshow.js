import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import styles from "./styles/slideshow.module.css";
export default function slideshow() {
  return (
    <div className={styles.main}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={36}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              className={styles.bgImage}
              src={`/images/cover.jpg`}
              layout="fill"
              objectFit="cover"
              alt="yuanzun"
            />
            <div className={styles.imageOverlay} />
            <div className={styles.kontenSlide}>
              <div className={styles.fotoKonten}>
                <Image src={`/images/cover.jpg`} layout="fill" alt="yuanzun" />
              </div>
              <div className={styles.kontenInfo}>
                <div className={styles.infoJudul}>Spare Me, Great Lord !</div>
                <div className={styles.infoTipe}>Manhua</div>
                <div className={styles.infoDeskripsi}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates iusto illo consectetur praesentium, nostrum earum!
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              className={styles.bgImage}
              src={`/images/cover.jpg`}
              layout="fill"
              objectFit="cover"
              alt="yuanzun"
            />
            <div className={styles.imageOverlay} />
            <div className={styles.kontenSlide}>
              <div className={styles.fotoKonten}>
                <Image src={`/images/cover.jpg`} layout="fill" alt="yuanzun" />
              </div>
              <div className={styles.kontenInfo}>
                <div className={styles.infoJudul}>Spare Me, Great Lord !</div>
                <div className={styles.infoTipe}>Manhua</div>
                <div className={styles.infoDeskripsi}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates iusto illo consectetur praesentium, nostrum earum!
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
