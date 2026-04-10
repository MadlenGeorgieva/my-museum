import Searchfield from "./SearchBar";
import styles from "./Header.module.css";

export default function Header({ searchValue, onSearch, onPlanVisit }){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.links}>
                    <a href="#">Home</a>
                    <span className={styles.divider}> | </span>
                    <a href="#">Plants</a>
                    <span className={styles.divider}> | </span>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        onPlanVisit?.();
                      }}
                    >
                      Plan your visit
                    </a>
                </div>
                <Searchfield filter={searchValue} handleinput={onSearch} />
            </nav>
        </header>
    )
}