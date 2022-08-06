import { useSnipcart } from 'use-snipcart'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './Header.module.scss'
import Topbar from './Topbar/Topbar'
import Nikelogo from '../../assets/Logo_NIKE.png'
import Image from 'next/image'
import MegaMenu from './MegaMenu/MegaMenu'
import React, { useState } from 'react'
import {
    clothingMenu,
    featuredMenu,
    popularTerms,
    shoesMenu,
    topmenu,
} from '../../Constants/MenuConstant'
import Search from './Search/Search'
import CartWishlist from './CartWishlist/CartWishlist'
import classNames from 'classnames'

const Header = ({ isSticky }: { isSticky: boolean }) => {
    const { cart = {} } = useSnipcart()

    const [showSearchContainer, setshowSearchContainer] = useState(false)

    const searchContainerClass = classNames({
        isOpen: showSearchContainer,
    })

    const onMouseEnter = () => {
        const backdropElement = document.querySelector(
            '.backdropBody'
        ) as HTMLElement
        backdropElement.classList.add(`${styles.isHovered}`)
    }

    const onMouseLeave = () => {
        const backdropElement = document.querySelector(
            '.backdropBody'
        ) as HTMLElement
        backdropElement.classList.remove(`${styles.isHovered}`)
    }

    const onSearchClick = () => {
        setshowSearchContainer(true)
    }

    const onCloseSearch = () => {
        setshowSearchContainer(false)
    }
    return (
        <>
            <Topbar />
            <header
                className={`${styles.header} ${
                    showSearchContainer ? styles.isOpen : ''
                } px-12 flex items-center relative ${
                    isSticky ? 'sticky' : 'static'
                }`}
            >
                <Image
                    src={Nikelogo.src}
                    width="65"
                    height="20"
                    alt="Nike-logo"
                    className="z-10"
                />
                <div className={`flex-grow ${styles.navbar_search_container}`}>
                    <nav
                        className={`${styles.topmenu} absolute left-0 right-0`}
                    >
                        <ul className="text-center">
                            {topmenu.map((link) => (
                                <li
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    key={link.displayName}
                                    className={`${
                                        link.isStatic
                                            ? styles.isStatic
                                            : styles.isMegaMenu
                                    } inline-block`}
                                >
                                    <a href={link.link}>{link.displayName}</a>
                                    {!link.isStatic && (
                                        <MegaMenu
                                            classes={styles.megamenu_container}
                                            featuredMenu={featuredMenu}
                                            shoesMenu={shoesMenu}
                                            clothingMenu={clothingMenu}
                                            shopbySport={[]}
                                            shopbyBrand={[]}
                                            iconsMenu={[]}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={`block ${styles.fullSearch_container}`}>
                        <div className={styles.fullSearch_box}>
                            <div className="relative">
                                <div className="inline-block w-full">
                                    <Search
                                        classname={searchContainerClass}
                                        onSearchClick={onSearchClick}
                                    />
                                    <button
                                        className={styles.close_search_button}
                                        onClick={onCloseSearch}
                                    >
                                        X
                                    </button>
                                </div>
                                <div
                                    className={`${styles.preSearch_list_wrapper} pt-12 text-left`}
                                >
                                    <div className={styles.preSearch_list}>
                                        <h4 className="pb-3">
                                            Popular Search Terms
                                        </h4>
                                        <ul>
                                            {popularTerms.map((link) => (
                                                <li key={link.displayName}>
                                                    <a
                                                        href={link.link}
                                                        rel="nofollow"
                                                        className={`${styles.popular_terms_link} mb-3 inline-flex`}
                                                    >
                                                        {link.displayName}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cartWishlist_container}>
                    <CartWishlist />
                </div>

                <p className={styles.headerCart}>
                    {/* <button className="snipcart-checkout">
          <FaShoppingCart />
          <span>Rs. {cart.subtotal?.toFixed(2)}</span>
        </button> */}
                </p>
            </header>
            <div
                className={`${styles.backdrop_body} ${
                    showSearchContainer ? styles.isHovered : ''
                } backdropBody fixed inset-0 opacity-0`}
            ></div>
        </>
    )
}

export default Header
