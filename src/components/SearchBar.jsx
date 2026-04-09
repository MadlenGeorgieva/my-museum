import styles from "./SearchBar.module.css";

export default function Searchfield({ handleinput, filter }) {
    return (
        <div className={styles.searchContainer}>
            <input 
                type="search" 
                className={styles.searchInput}
                placeholder="Search your plants..." 
                value={filter} 
                onChange={handleinput}
            />
        </div>
    );
}