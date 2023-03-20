import styles from "@/styles/Prompt.module.css"
import Tag from "./Tag"

export default function Prompt({ selectTag }) {
    const menu_sections = [
        "Стили", "Страны", "Комнаты", "Художники / дизайнеры", "Другое", "Прочее"
    ]

    const tags = [
        {
            section_title: "Стили",
            tags: [
                "лофт", "модерн", "классика", "ар-деко", "минимализм", "хай-тек",
                "этно", "неоклассика", "прованс", "скандинавский",
                "эклектика", "экостиль", "современный"]
        },
        {
            section_title: "Страны",
            tags: [
                "американский", "английский", "арабский",
                "японский", "француский"]
        },
        {
            section_title: "Комнаты",
            tags: [
                "Ванная", "Гостиная", "Детская",
                "Кабинет", "Офис",
                "Прихожая", "Спальня", "Холл",
                "Коридор", "Уборная",
                "Туалет", "Гардероб", "Библиотека",
                "Домашний кинотеатр", "Тренажерный зал",
                "Зимний сад", "Сауна"
            ]
        },

        {
            section_title: "Дизайнеры / Художники",
            tags: [
                "Леонардо да Винчи", "Пабло Пикассо", "Сальвадор Дали", "Клод Моне",
                "Сандро Боттичелли", "Микеланджело Буонарроти", "Фрида Кало"
            ]
        },
        {
            section_title: "Прочее",
            tags: [
                "уютная атмосфера", "современный дизайн", "высокое качество",
                "цветочные мотивы", "Микеланджело Буонарроти", "Фрида Кало"
            ]
        }
    ]

    const updateData = (value) => {
        selectTag(value)
        // setPromptTags(prv => new Set([...prv, value]));
    }

    return (
        <div className={styles.prompt_tab}>
            <div className={styles.promt_container}>
                <div className={styles.content}>
                    {tags.map((section) => (
                        <div className={styles.section}>
                            <div className={styles.section_title}>
                                {section.section_title}
                            </div>

                            <div className={styles.tags}>
                                {section.tags.map((tag) => (
                                    <Tag key={tag} tag={tag} updateData={updateData} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <hr /> */}
                <div className={styles.prompt}>

                    <div className={styles.prompt_tags}>

                    </div>

                    <input className={styles.inpt} />
{/*
                    <div className={styles.head}>
                        <div className={styles.img}>

                        </div>
                        <div>
                            BedroomPhoto.png
                        </div>
                    </div> */}

                </div>


            </div>

            {/* <div className={styles.document_upload}>
                <DocumentUpload />
            </div>

            <div className={styles.head}>
                <div className={styles.img}>

                </div>
                <div>
                    BedroomPhoto.png
                </div>
                <div className={styles.generate_btn}>Сгенерировать</div>
            </div> */}
        </div>
    )
}