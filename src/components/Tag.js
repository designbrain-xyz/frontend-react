import styles from "@/styles/Tag.module.css"
import { AiOutlineCheck } from 'react-icons/ai'
import { useState } from "react"

export default function Tag({ tag, updateData, isInitiallySelected }) {

    let initTagColor = isInitiallySelected ? styles.selected : styles.not_selected

    const [isSelected, setIsSelected] = useState(isInitiallySelected)
    const [tagColor, setTagColor] = useState(initTagColor)

    const selectTag = () => {

        if (updateData) {

            let newSelectedState = isSelected ? false : true
            let newTagColor = isSelected ? styles.not_selected : styles.selected

            setIsSelected(newSelectedState)
            setTagColor(newTagColor)

            updateData(tag)
        }
    }

    return (
        <div
            className={[styles.tag, tagColor].join(' ')} onClick={selectTag}>
            {tag}
        </div>
    )
}