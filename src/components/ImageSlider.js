import styles from "@/styles/ImageSlider.module.css"
import { useState } from "react";

export default function ImageSlider() {

    const [position, setPosition] = useState("50%");

    // const container = document.querySelector('container')
    // document.querySelector('.slider').addEventListener('input', (e) => {
    //     container.style.setProperty('--position', `${e.target.value}%`)
    // })

    // let position = "50%"

    function handleChange(event) {
        setPosition(`${event.target.value}%`);
        // position = `${event.target.value}%`
        // console.log(position)
    }

    return (
        <div className={styles.container} style={{'--position': position}}>
            <div className={styles.image_container}>
                <img
                    className={[styles.image_before, styles.slider_image].join(' ')}
                    src="https://twizz.ru/wp-content/uploads/2018/04/1-33.jpg"
                    alt="Before image"
                />

                <img
                    className={[styles.image_after, styles.slider_image].join(' ')}
                    src="https://twizz.ru/wp-content/uploads/2018/04/2-23.jpg"

                    // src="https://gid-home.ru/sites/default/files/fartuk_dlya_kuhni_iz_mdf_megapolis_3_695h2070h4mm.jpg"
                    alt="After image"
                />
            </div>

            <input type="range" min="0" max="100" value="50" className={styles.slider} onChange={handleChange} />
            <div className={styles.slider_line}></div>
            <div className={styles.slider_button}></div>
        </div>
    )
}