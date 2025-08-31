import Link from "next/link";
import styles from "./Partners.module.scss";
import Image from "next/image";
import link from "@/images/product-link.png";

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
                See catalog
                <Image className={styles.btn} src={link} alt="link" />
              </Link>
            </div>
          </div>
          <div className={styles.values}></div>
        </div>
      </div>
    </div>
  );
}
