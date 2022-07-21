import Image from "next/image";
import styles from "../styles/components/SlideShow.module.css";
import Link from "next/link";

import { Chevron } from "../components/Icons";

// Swipper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function slideshow(props) {
  const Data = props.Data;
  const { SlideshowConfig } = props;
  return (
    <div className={styles.main}>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        slidesPerView={SlideshowConfig.slidesPerView}
        pagination={{ clickable: true }}
        navigation={
          SlideshowConfig.navigation && {
            prevEl: `.${styles.tombolPrev}`,
            nextEl: `.${styles.tombolNext}`,
          }
        }
      >
        {Data.map((data, index) => {
          return (
            <SwiperSlide key={data.judul}>
              <Link href={`/detail/${data.link}`} key={index}>
                <a>
                  <KontenSlide data={data} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
        <div className={styles.tombolPrev}>
          <Chevron direction={"left"} color={"var(--main)"} />
        </div>
        <div className={styles.tombolNext}>
          <Chevron direction={"right"} color={"var(--main)"} />
        </div>
      </Swiper>
    </div>
  );
}

function KontenSlide({ data }) {
  return (
    <div className={styles.slide}>
      <Image
        className={styles.bgImage}
        src={`/images/${data.foto}`}
        layout="fill"
        objectFit="cover"
        alt={data.judul}
        priority={true}
      />
      {/* Start Image Overlay */}
      <div className={styles.imageBrightness} />
      <div className={styles.imageOverlay} />
      <div className={styles.kontenSlide}>
        {/* End Image Overlay */}
        <div className={styles.fotoKonten}>
          <Image src={`/images/${data.foto}`} layout="fill" alt="yuanzun" />
        </div>
        <div className={styles.kontenInfo}>
          <div className={styles.infoJudul}>{data.judul}</div>
          <div className={styles.infoTipe}>Manhua</div>
          <div className={styles.infoDeskripsi}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            iusto illo consectetur praesentium, nostrum earum!
          </div>
        </div>
      </div>
    </div>
  );
}
