import { useSnipcart } from "use-snipcart";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.scss";
import React from "react";

const Header = ({ logo }: { logo?: string }) => {
  const { cart = {} } = useSnipcart();
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>
        <Link href="/">
          <img src={logo} alt="minori-white-logo" />
        </Link>
      </p>
      <ul className={styles.headerLinks}>
        <li>
          <Link href="#">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Our story</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Values</a>
          </Link>
        </li>
      </ul>
      <p className={styles.headerCart}>
        <button className="snipcart-checkout">
          <FaShoppingCart />
          <span>Rs. {cart.subtotal?.toFixed(2)}</span>
        </button>
      </p>
    </header>
  );
};

export default Header;
