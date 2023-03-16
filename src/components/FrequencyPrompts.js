import styles from "@/styles/FrequencyPrompts.module.css"
import SectionTag from "./SectionTag"
import { BsPlusCircleDotted } from 'react-icons/bs'
import Tag from "./Tag"
import { useState } from "react"

export default function FrequencyPrompts({selectTag}) {
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
        <div className={styles.container}>
            <div className={styles.menu_sections}>

                <div className={styles.add_section_btn}>
                    <BsPlusCircleDotted />
                </div>

                {menu_sections.map((tag) => (
                    <SectionTag key={tag} tag={tag} />
                ))}
            </div>
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
        </div>
    )
}