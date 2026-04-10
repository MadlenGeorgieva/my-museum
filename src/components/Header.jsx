import styles from "./Header.module.css";

export default function Header({ onNavigate }) {
  return (
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
      </nav>
    </header>
  );
}