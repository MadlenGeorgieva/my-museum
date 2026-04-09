import styles from "./Header.module.css";

export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#">Home</a>
                <span className={styles.divider}> | </span>
                <a href="#">My Plants</a>
                <span className={styles.divider}> | </span>
                <a href="#">About</a>
            </nav>
        </header>
    )
}