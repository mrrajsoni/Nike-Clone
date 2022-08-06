import React from 'react'
import SearchIcon from '../../../assets/search.svg'
import styles from './Search.module.scss'

const Search = ({
    onSearchClick,
    classname,
}: {
    onSearchClick: () => void
    classname: string
}) => {
    return (
        <div
            className={` ${styles.search_box} relative flex items-center ${classname}`}
        >
            <SearchIcon />
            <input
                className={styles.search_input}
                type="text"
                placeholder="Search"
                onClick={onSearchClick}
            />
        </div>
    )
}

export default Search
