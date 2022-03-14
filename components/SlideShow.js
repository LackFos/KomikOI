import Image from "next/image";
import styles from "./styles/SlideShow.module.css";
import Link from "next/link";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function slideshow(props) {
  const Data = props.DataSlideshow;
  return (
    <div className={styles.main}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={36}
        loop={true}
        pagination={{ clickable: true }}
      >
        {Data.map((data, index) => {
          return (
            <SwiperSlide key={data.judul}>
              <Link href="/details" key={index}>
                <a>
                  <KontenSlide data={data} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
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
        alt="yuanzun"
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
