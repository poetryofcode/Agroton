import Link from "next/link";
import styles from "./Partners.module.scss";
import Image from "next/image";
import link from "@/images/product-link.png";
import logo from "../images/icon.png";
import stats from "../images/stats-img.png";

export default function Partners() {
  return (
    <div className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.contacts}>
            <h3 className={styles.title}>
              Agroton is a reliable supplier of agricultural products
            </h3>{" "}
            <div className={styles.wrapper}>
              <p className={styles.text}>
                We cooperate with processors, distributors and retail chains,
                ensuring stable supplies and high quality standards.
              </p>

              <Link className={styles.link} href={"/"}>
                contact us
                <Image className={styles.btn} src={link} alt="link" />
              </Link>
            </div>
          </div>
          <div className={styles.values}>
            <div className={styles.stats}>
              <div className={styles.stats__info}>
                <Image className={styles.stats__btn} src={logo} alt="link" />
                <ul className={styles.list}>
                  <li className={styles.item}>
                    Direct deliveries of products from the manufacturer
                  </li>
                  <li className={styles.item}>
                    Guaranteed traceability and certification
                  </li>
                  <li className={styles.item}>
                    Individual approach to each partner
                  </li>
                </ul>
              </div>
              <Image className={styles.stats__img} src={stats} alt="link" />
            </div>
            <div className={styles.info}>
              <p className={styles.info__text}>
                We value long-term relationships and are open to new
                opportunities for cooperation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
