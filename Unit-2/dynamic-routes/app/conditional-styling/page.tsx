import styles from "./page.module.css";

export default function Student() {
    const passed = true;

    return (
        <div>
            <h2 className={passed ? styles.pass : styles.fail}>
                Student Result
            </h2>
        </div>
    );
}