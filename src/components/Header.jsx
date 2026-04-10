import Searchfield from "./SearchBar";
import styles from "./Header.module.css";

export default function Header({ searchValue, onSearch, onNavigate }){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.links}>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate?.("home");
                      }}
                    >
                      Home
                    </a>
                    <span className={styles.divider}> | </span>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate?.("plants");
                      }}
                    >
                      Plants
                    </a>
                    <span className={styles.divider}> | </span>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate?.("visit");
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