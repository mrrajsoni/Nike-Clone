import { useSnipcart } from "use-snipcart";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.scss";
import Topbar from "./Topbar/Topbar";
import Nikelogo from "../../assets/Logo_NIKE.png"
import Image from "next/image";
import MegaMenu from "./MegaMenu/MegaMenu";
import React from "react";
import { clothingMenu, featuredMenu, shoesMenu, topmenu } from "../../Constants/MenuConstant";
import Search from "./Search/Search";


const Header = ({ isSticky }: { isSticky: boolean }) => {
  const { cart = {} } = useSnipcart();

  const onMouseEnter = () =>{
  const backdropElement = document.querySelector(".backdropBody") as HTMLElement;

    backdropElement.classList.add(`${styles.isHovered}`)
  }

  const onMouseLeave = () =>{
  const backdropElement = document.querySelector(".backdropBody") as HTMLElement;

    backdropElement.classList.remove(`${styles.isHovered}`)
  }
  return ( 
    <>
      <Topbar />
      <header className={`${styles.header} px-12 flex items-center relative ${isSticky ? "sticky" : "static"}`}>
        <Image src={Nikelogo.src} width="65" height="20" alt="Nike-logo" />
        <div className={`flex-grow ${styles.navbar_search_container}`}>
          <nav className={`${styles.topmenu} absolute left-0 right-0`}>
            <ul className="flex">
              {topmenu.map((link) => (
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={link.displayName} className={`${link.isStatic ? styles.isStatic : styles.isMegaMenu}`}>
                  <a href={link.link}>{link.displayName}</a>
                  {!link.isStatic &&
                    <MegaMenu classes={styles.megamenu_container} featuredMenu={featuredMenu} shoesMenu={shoesMenu} clothingMenu={clothingMenu} shopbySport={[]} shopbyBrand={[]} iconsMenu={[]} />}
                </li>
              ))
              }
            </ul>
          </nav>
          <div className={`${styles.search_container} flex items-center absolute right-0`}>
            <Search />
          </div>
        </div>


        <p className={styles.headerCart}>
          {/* <button className="snipcart-checkout">
          <FaShoppingCart />
          <span>Rs. {cart.subtotal?.toFixed(2)}</span>
        </button> */}
        </p>
      </header>
      <div className={`${styles.backdrop_body} backdropBody`}></div>
    </>

  );
};

export default Header;
