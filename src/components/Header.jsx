import styles from "./Header.module.css";

export default function Header({ onNavigate, canGoBack, currentPage }) {
  const showBackButton = (currentPage === "plants" || currentPage === "visit") && canGoBack;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          {showBackButton && (
            <>
              <button
                type="button"
                className={styles.backButton}
                onClick={() => onNavigate?.("back")}
                aria-label="Back"
              >
                <span className={styles.backIcon}>➜</span>
              </button>
              <span className={styles.divider}>|</span>
            </>
          )}
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