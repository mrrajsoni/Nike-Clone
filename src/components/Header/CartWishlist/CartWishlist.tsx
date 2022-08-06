import React from 'react'
import WislistIcon from '../../../assets/heart.svg'
import CartIcon from '../../../assets/bag.svg'
import styles from './CartWishlist.module.scss'

const CartWishlist = () => {
    return (
        <div className={`${styles.cartWishlist} relative `}>
            <a href="#" title="Favorites" rel="nofollow" className="mr-3">
                <WislistIcon />
            </a>
            <div className={`${styles.cartIcon_wrapper}`}>
                <a href="#" rel="nofollow" title="Bag Items: 0">
                    <CartIcon />
                </a>
            </div>
        </div>
    )
}

export default CartWishlist
