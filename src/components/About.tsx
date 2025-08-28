"use client";
import Link from "next/link";
import styles from "./About.module.scss";
import Image from "next/image";
import boxImgOne from "@/images/box-image-1.png";
import boxImgTwo from "@/images/box-image-2.png";
import boxBtn from "@/images/box-btn.png";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container__big}>
        <div className={styles.about__top}>
          <h1 className={styles.about__title}>Agroton</h1>
          <p className={styles.about__text}>
            one of the largest producers of agricultural products in Nebraska
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.about__achievements}>
          <Link className={styles.about__achievement} href="#">
            <div className={styles.box}>
              <Image className={styles.box__img} alt="image" src={boxImgOne} />
              <button className={styles.box__btn}>
                <Image alt="image" src={boxBtn} />
              </button>
            </div>
            <div className={styles.content}>
              <h4 className={styles.content__title}>
                Agroton is among the leaders in wheat production in Nebraska
              </h4>
              <p className={styles.content__text}>
                We rank{" "}
                <span className={styles.content__highlight}>
                  4th in Nebraska
                </span>{" "}
                in terms of wheat production, ensuring high quality grain thanks
                to modern technologies and fertile Nebraska fields.
              </p>
            </div>
          </Link>
          <Link className={styles.about__achievement} href="#">
            <div className={styles.box}>
              <Image className={styles.box__img} alt="image" src={boxImgTwo} />
              <button className={styles.box__btn}>
                <Image alt="image" src={boxBtn} />
              </button>
            </div>
            <div className={styles.content}>
              <h4 className={styles.content__title}>
                Agroton – number 1 in chicken production in Nebraska
              </h4>
              <p className={styles.content__text}>
                We lead the chicken market in Nebraska, guaranteeing the highest
                quality products thanks to modern technologies, safety controls
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
