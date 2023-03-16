import styles from "@/styles/SectionTag.module.css"
import { TiDelete } from 'react-icons/ti'
import { useState } from "react"

export default function SectionTag({ tag }) {

    const deleteTag = () => {

    }

    return (
        <div className={styles.tag}>

            {tag}
            <div className={styles.icon}>
                <TiDelete onClick={deleteTag}/>
            </div>

        </div>
    )
}