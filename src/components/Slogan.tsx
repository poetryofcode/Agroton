import styles from "./Slogan.module.scss";

export default function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.slogan__inner}>
        <h3 className={styles.slogan__subtitle}>
          Impressive scale. Convincing quality.
        </h3>
        <h1 className={styles.slogan__title}>Agroton</h1>
      </div>
    </div>
  );
}
