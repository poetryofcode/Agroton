import Link from "next/link";
import styles from "./Blog.module.scss";
import Image from "next/image";
import itemImg from "@/images/item__img.png";
import blogTwo from "@/images/blog-2.png";
import blogThree from "@/images/blog-3.png";

export default function About() {
  return (
    <section className={styles.blog}>
      <div className={styles.container__big}>
        <div className={styles.blog__wrapper}>
          <div className={styles.container}>
            <h2 className={styles.title}>Recent blog posts</h2>
            <div className={styles.items}>
              <div className={styles.item}>
                <Image className={styles.item__img} src={itemImg} alt="img" />
                <div className={styles.item__info}>
                  <p className={styles.date}>Agroton • Sep 10th 2025</p>
                  <h4 className={styles.subtitle}>
                    Agroton expands sown areas
                  </h4>
                  <p className={styles.text}>
                    This year we increased sown areas by 10%, which will allow
                    us to increase the production of grain and oilseed crops.
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image className={styles.item__img} src={blogTwo} alt="img" />
                <div className={styles.item__info}>
                  <p className={styles.date}>Agroton • Sep 10th 2025</p>
                  <h4 className={styles.subtitle}>Export to a new country!</h4>
                  <p className={styles.text}>
                    We entered the market of [country name] and expanded the
                    geography of supplies of quality Ukrainian products.
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image className={styles.item__img} src={blogThree} alt="img" />
                <div className={styles.item__info}>
                  <p className={styles.date}>Agroton • Sep 10th 2025</p>
                  <h4 className={styles.subtitle}>
                    Modern technologies in livestock farming
                  </h4>
                  <p className={styles.text}>
                    Agroton has implemented innovative systems for feeding and
                    caring for livestock, which improves product quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
