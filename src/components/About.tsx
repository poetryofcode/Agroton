import styles from "./About.module.scss";
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
    </section>
  );
}
