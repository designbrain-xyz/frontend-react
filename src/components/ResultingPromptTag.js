import styles from "@/styles/Resulting.module.css"

export default function ResultingPromptTag({tag, updateData}) {

    const clickTag = () => {
        updateData(tag)
    } 

    return (
        <div className={styles.tag} onClick={clickTag}>
            {tag}
        </div>
    )
}