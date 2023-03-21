import styles from "@/styles/Prompt.module.css"
import Tag from "./Tag"
import { Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import ResultingPromptTag from "./ResultingPromptTag";
// import { Input } from 'antd';


const { Panel } = Collapse;

const onChange = (key) => {
    console.log(key);
};

export default function Prompt() {

    const [resultingPromt, setResultingPrompt] = useState([])

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

    const updateData = (tag) => {
        const tagIndex = resultingPromt.indexOf(tag)

        if (tagIndex != -1) {
            setResultingPrompt([
                ...resultingPromt.slice(0, tagIndex), 
                ...resultingPromt.slice(tagIndex + 1)]);
        } else {
            setResultingPrompt([...resultingPromt, tag])
        };
    }

    return (
        <div>
            <div className={styles.clue_tags_container}>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                    {tags.map((section) => (
                        <Panel header={section.section_title} key={section.section_title}>
                            <div className={styles.tags}>
                                {section.tags.map((tag) => (
                                    <Tag key={tag} tag={tag} updateData={updateData} isInitiallySelected={false} />
                                ))}
                            </div>
                        </Panel>
                    ))}
                </Collapse>
            </div>

            <div className={styles.resulting_tags_prompt}>
                <div className={styles.tags}>
                    {resultingPromt.map((tag) => (
                        <ResultingPromptTag>{tag}</ResultingPromptTag>
                        // <Tag key={tag} tag={tag}/>
                    ))}
                </div>
            </div>

            <div className={styles.inpt_section}>
                <input className={styles.tags_inpt} />

                <div className={styles.upload_icon}>

                </div>
            </div>

            <div className={styles.btn_section}>
                <button className={styles.generate_btn}>Генерация</button>

                <div className={styles.upload_icon}>

                </div>
            </div>
        </div>
    )
}