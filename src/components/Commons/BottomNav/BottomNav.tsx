import React from "react"
import BottomNavStyles from "./BottomNav.module.scss"

export interface NavProps {
    menu: menuProps[],
    isSlicedMenu?: boolean
    menuLabel?: string
}

export interface menuProps {
    displayName: string,
    link: string
}

const BottomNav = (props: NavProps) => {
    const { menu, isSlicedMenu, menuLabel } = props
    return (
        <section className={`${BottomNavStyles.bottom_nav_container}`}>
            <div className={`${BottomNavStyles.home_bottom_nav}`}>
                <h5>{menuLabel}</h5>
                {isSlicedMenu ?
                    <ul>
                        {menu.slice(0, 4).map((link) => (
                            <li role="listitem" key={link.displayName}><a className={BottomNavStyles.gray_nav} href={link.link}>{link.displayName}</a></li>
                        ))}
                        <div className={BottomNavStyles.toggled_nav} role="list" aria-hidden="false">
                            {menu.slice(5).map((link) => (
                                <li role="listitem" key={link.displayName}><a className={BottomNavStyles.gray_nav} href={link.link}>{link.displayName}</a></li>
                            ))}
                        </div>
                    </ul>
                    :
                    <ul>
                        {menu.map((link) => (
                            <li role="listitem" key={link.displayName}><a className={BottomNavStyles.gray_nav} href={link.link}>{link.displayName}</a></li>
                        ))}
                    </ul>}

            </div>
        </section>
    )
}

export default BottomNav