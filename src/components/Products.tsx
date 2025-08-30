import Link from "next/link";
import styles from "./Products.module.scss";
import Image from "next/image";
import btn from "@/images/product-btn.png";
import link from "@/images/product-link.png";

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.container__big}>
        <div className={styles.products__wrapper}>
          <div className={styles.container}>
            <div className={styles.products__inner}>
              <h2 className={styles.title}>
                High quality agricultural products
              </h2>
              <div className={styles.products__list}>
                <Link className={styles.products__item} href={"/"}>
                  <h3 className={styles.products__title}> Cereal crops</h3>
                  <p className={styles.products__text}>(wheat, barley, corn)</p>
                  <button className={styles.products__btn}>
                    <Image src={btn} alt="image" />
                  </button>
                </Link>
                <Link className={styles.products__item} href={"/"}>
                  <h3 className={styles.products__title}>🌻 Oilseeds</h3>
                  <p className={styles.products__text}>
                    (sunflower, rapeseed, soybean)
                  </p>
                  <button className={styles.products__btn}>
                    <Image src={btn} alt="image" />
                  </button>
                </Link>
                <Link className={styles.products__item} href={"/"}>
                  <h3 className={styles.products__title}>🥛 Dairy products</h3>
                  <p className={styles.products__text}>
                    (milk, dairy products)
                  </p>
                  <button className={styles.products__btn}>
                    <Image src={btn} alt="image" />
                  </button>
                </Link>
                <Link className={styles.products__item} href={"/"}>
                  <h3 className={styles.products__title}>🍞 Bakery products</h3>
                  <p className={styles.products__text}>(bread, pastries)</p>
                  <button className={styles.products__btn}>
                    <Image src={btn} alt="image" />
                  </button>
                </Link>
                <Link className={styles.products__item} href={"/"}>
                  <h3 className={styles.products__title}>🐔 Poultry farming</h3>
                  <p className={styles.products__text}>(chicken, eggs)</p>
                  <button className={styles.products__btn}>
                    <Image src={btn} alt="image" />
                  </button>
                </Link>
                <Link className={styles.products__item} href={"/"}>
                  <h3 className={styles.products__title}>
                    🍏 Vegetables and fruits
                  </h3>
                  <p className={styles.products__text}>( check availability)</p>
                  <button className={styles.products__btn}>
                    <Image src={btn} alt="image" />
                  </button>
                </Link>
              </div>
              <div className={styles.link__wrapper}>
                <Link className={styles.products__link} href={"/"}>
                  See catalog
                  <Image className={styles.link__btn} src={link} alt="link" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
