import styles from "./page.module.css";
export default function CSS() {
    return (
        <main>
            <h1 className={styles.title}>Welcome to Next.js</h1>
            <p className={styles.description}>This page uses CSS Modules</p>
        </main>
    )
}