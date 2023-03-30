import styles from "@/styles/Resulting.module.css"

export default function ResultingPromptTag({tag, updateData, section}) {

    const clickTag = () => {
        updateData(tag, section)
    } 

    return (
        <div className={styles.tag} onClick={clickTag}>
            {tag}
        </div>
    )
}