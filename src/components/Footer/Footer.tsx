import FooterNav from '../Commons/FooterNav/FooterNav'
import styles from './Footer.module.scss'
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import YouTube from "../../assets/youtube.svg"
import React from 'react'


const footerMainMenu = [
    {
        displayName: "find a store",
        link: "#"
    },
    {
        displayName: "become a member",
        link: "#"
    },
    {
        displayName: "sign up for email",
        link: "#"
    },
    {
        displayName: "student discount",
        link: "#"
    },
    {
        displayName: "send us feedback",
        link: "#"
    },
]

const footerAboutMenu = [
    {
        displayName: "News",
        link: "#"
    },
    {
        displayName: "Careers",
        link: "#"
    },
    {
        displayName: "Investors",
        link: "#"
    },
    {
        displayName: "Sustainability",
        link: "#"
    },
]

const hoverFooterMenu = [
    {
        displayName: "Nike Adapt",
        link: "#"
    },
    {
        displayName: " Nike Air",
        link: "#"
    },
    {
        displayName: " Nike Air Force 1",
        link: "#"
    },
    {
        displayName: "Nike Air Max",
        link: "#"
    },
    {
        displayName: "  Nike FlyEase",
        link: "#"
    },
    {
        displayName: "Nike Flyknit",
        link: "#"
    },
    {
        displayName: "  Nike Flyleather",
        link: "#"
    },
    {
        displayName: "   Nike Free",
        link: "#"
    },
    {
        displayName: "Nike Joyride",
        link: "#"
    },
    {
        displayName: "Nike Pegasus",
        link: "#"
    },
    {
        displayName: "Nike React",
        link: "#"
    },
    {
        displayName: " Nike Vaporfly",
        link: "#"
    },
    {
        displayName: "Nike Zoom Fly",
        link: "#"
    },
]

const Footer = () => {
    return <footer className={styles.footer}>
        <div className={`${styles.footer_inner_container} relative`}>
            <div className='flex'>
                <div className='w-9/12 flex'>
                    <FooterNav width={true} uppercase={true} menu={footerMainMenu} />
                    <FooterNav width={true} menu={footerMainMenu} linkHeader="Get help" linkColor='gray' />
                    <FooterNav width={true} linkHeader="About Nike" linkColor='gray' menu={footerAboutMenu} />
                </div>
                <div className={`${styles.social_container} flex gap-4 w-3/12 justify-end`}>
                    <Twitter />
                    <Facebook />
                    <YouTube />
                    <Instagram />
                </div>
            </div>
            <div className={`${styles.footer_copyright_container} flex justify-between mt-7 pb-4 items-end`}>
                <span>© 2022 Nike, Inc. All Rights Reserved</span>
                <div className='w-6/12'>
                    <ul className='flex gap-6 relative justify-end'>
                        <li className={`${styles.guide_button} pt-3`}>
                            <span className={`cursor-pointer ${styles.guides}`}>Guides</span>
                            <div className={`${styles.hover_menu_container} absolute px-7 py-5 my-2 left-0`}>
                                <FooterNav menu={hoverFooterMenu} linkColor='gray' />
                            </div>
                        </li>
                        <li className={"pt-3"}>
                            <a href="#">Terms of Sale</a>
                        </li>
                        <li className={"pt-3"}>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li className={"pt-3"}>
                            <a href="#">Nike Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
        <div className='h-8 bg-white'></div>
    </footer>

}

export default Footer
