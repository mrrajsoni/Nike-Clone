import { NavProps } from "../BottomNav/BottomNav"
import styles from "./FooterNav.module.scss"

interface FooterNavProps extends NavProps {
    uppercase?: boolean
    linkHeader?: string
    linkColor?: string
    width?: boolean
}
const FooterNav = (props: FooterNavProps) => {
    const { menu, uppercase, linkHeader, linkColor, width } = props

    return (
        <div className={`${styles.footer_nav_container} ${width ? "w-3/12" : ""}
`} data-color={linkColor}>
            <ul className={uppercase ? "uppercase" : ""}>
                {linkHeader &&
                    <li className="uppercase text-white pb-3 text-sm linkheader">{linkHeader}</li>}
                {menu.map((link) => (
                    <li className={`pb-3 links_li`} key={link.displayName} >
                        <a href={link.link}>{link.displayName}</a>
                    </li>
                ))}
            </ul>

        </div >

    )
}

export default FooterNav