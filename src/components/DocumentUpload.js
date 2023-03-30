import styles from "@/styles/Document.module.css"
import { useState } from "react"


export default function DocumentUpload() {

    const [fileSrc, setFileSrc] = useState("")

    const onFileUpload = (e) => {

        console.log(Array.from(e.target.files))
        const files = Array.from(e.target.files)
        console.log(files[0])
        console.log(URL.createObjectURL(files[0]))
        setFileSrc(URL.createObjectURL(files[0]))
    }

    return (
        <div>
            <div className={styles.upload_view}>

                <img src={fileSrc} className={styles.img}/>

                <h3  className={styles.title}>title</h3>
                <p  className={styles.description}> title </p>
                <label className={styles.input}>
                    <input type="file" accept="image/png, image/jpg, image/jpeg, application/pdf"
                        onInput={onFileUpload} />
                </label>

            </div>
        </div >

    )
}