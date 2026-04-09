import Searchfield from "./SearchBar";
import styles from "./Header.module.css";

export default function Header({ searchValue, onSearch }){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.links}>
                    <a href="#">Home</a>
                    <span className={styles.divider}> | </span>
                    <a href="#">My Plants</a>
                    <span className={styles.divider}> | </span>
                    <a href="#">About</a>
                </div>
                <Searchfield filter={searchValue} handleinput={onSearch} />
            </nav>
        </header>
    )
}