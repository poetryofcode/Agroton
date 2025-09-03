import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "@/images/Logo.png";

export default function About() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <ul>
            <li>Navigation</li>
            <li>About company</li>
            <li>Products</li>
            <li>Partners</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Information</li>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms of cooperation</li>
            <li>Guarantees</li>
          </ul>
          <ul>
            <li>Contacts</li>
            <li>23 Main St, Omaha, NE, 63021</li>
            <li>info@agroton.com</li>
            <li>917 277 4274</li>
          </ul>
        </div>
        <ul className={styles.bottom}>
          <li>2035 Agroton © All rights reserved</li>
          <li>Privacy Policy</li>
          <li>Offer contract</li>
        </ul>
      </div>
    </footer>
  );
}
