import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/images/Logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <nav className={styles.menu}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>About company</li>
              <li className={styles.menu__item}>Products</li>
              <li className={styles.menu__item}>Partners</li>
              <li className={styles.menu__item}>Blog</li>
              <li className={styles.menu__item}>Contact</li>
            </ul>
          </nav>
          <a href="tel:+3082226338">Contact us</a>
        </div>
      </div>
    </header>
  );
}
