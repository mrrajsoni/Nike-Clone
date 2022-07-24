import React from "react";
import BottomNav, { menuProps } from "../../Commons/BottomNav/BottomNav";

const MegaMenu = ({ classes, featuredMenu, shoesMenu, clothingMenu, shopbySport, shopbyBrand, iconsMenu }: { classes: string, featuredMenu: menuProps[], shoesMenu: menuProps[], clothingMenu: menuProps[], shopbySport: menuProps[], shopbyBrand: menuProps[], iconsMenu: menuProps[] }) => {
    return (
        <div className={`${classes} bg-white flex`}>
            <div>
                <div >
                    <BottomNav menuLabel="New & Featured" menu={featuredMenu} />
                </div>
                <div>
                    <BottomNav menuLabel="Shoes" menu={shoesMenu} />
                </div>
                <div>
                    <BottomNav menuLabel="Clothing" menu={clothingMenu} />
                </div>
                <div>
                    <BottomNav menuLabel="Shop by sports" menu={shopbySport} />
                    <BottomNav menuLabel="Shop by brans" menu={shopbyBrand} />
                </div>
                <div>
                    <BottomNav menuLabel="Icons" menu={iconsMenu} />
                </div>
            </div>

        </div>
    );
};

export default MegaMenu;
