import styles from "@/styles/Resulting.module.css"

export default function ResultingPromptTag({children}) {
    return (
        <div className={styles.tag}>
            {children}
        </div>
    )
}