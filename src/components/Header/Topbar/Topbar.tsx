import React from "react"
import Jordan from "../../../assets/jordan.svg"
import FooterNav from "../../Commons/FooterNav/FooterNav"
import styles from "./Topbar.module.scss"

const topbar_hover_menu = [
    {
        displayName: "Order Status",
        link: "#"
    }, {
        displayName: "Dispatch & Delivery",
        link: "#"
    }, {
        displayName: "Returns",
        link: "#"
    }, {
        displayName: "Contact Us",
        link: "#"
    }, {
        displayName: "Privacy Policy",
        link: "#"
    }, {
        displayName: "Terms of Sale",
        link: "#"
    },
]

const Topbar = () => {
    return (
        <section className={`${styles.topbar_container} flex justify-between items-center h-9 px-12 mx-0 font-12`}>
            <Jordan />
            <div className={`flex ${styles.topbar_links_container} h-full items-center`}>
                <div className={`${styles.help_link} relative`}> <a href="#">Help</a>
                    <div className={`absolute ${styles.topbar_hovermenu_container} bg-white p-6 right-4`}>
                        <span className="mb-5 block">Help</span>
                        <FooterNav menu={topbar_hover_menu} />
                    </div>
                </div>
                <div><a href="#">Join Us</a></div>
                <div><a href="#">Sign in</a></div>
            </div>
        </section >
    )
}

export default Topbar