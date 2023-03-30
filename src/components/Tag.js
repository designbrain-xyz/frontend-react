import styles from "@/styles/Tag.module.css"
import { useEffect, useState } from "react"

export default function Tag({ tag, updateData, isSelected, section }) {

    const [tagColor, setTagColor] = useState(styles.not_selected)

    useEffect(() => {
        const updatedTagColor = isSelected ? styles.selected : styles.not_selected
        setTagColor(updatedTagColor)
    }, [isSelected]);

    const selectTag = () => {
        updateData(tag, section)
    }

    return (
        <div
            className={[styles.tag, tagColor].join(' ')} onClick={selectTag}>
            {tag}
        </div>
    )
}