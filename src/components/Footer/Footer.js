import styles from './Footer.module.scss'

const Footer = ({ ...rest }) => {
    return <footer className={styles.footer} {...rest}></footer>
}

export default Footer
