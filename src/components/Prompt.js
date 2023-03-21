import styles from "@/styles/Prompt.module.css"
import Tag from "./Tag"
import { Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import ResultingPromptTag from "./ResultingPromptTag";

const { Panel } = Collapse;

const onChange = (key) => {
    console.log(key);
};

export default function Prompt({ serverTags, serverSections }) {

    const [tags, setTags] = useState(serverTags)
    const [tagSections, setTagSections] = useState(serverSections)

    const [resultingPromt, setResultingPrompt] =
        useState([
            {
                title: "классика",
                section: "Стили"
            },
            {
                title: "неоклассика",
                section: "Стили"
            },
            {
                title: "прованс",
                section: "Стили"
            }
        ])

    const updateData = (tag, section) => {

        const tagIndexAmongAll = tags.findIndex(t => t.title === tag);

        if (tagIndexAmongAll != -1) {
            const updatedIsSelected = tags[tagIndexAmongAll].isSelected ? false : true
            const updatedTags = [...tags];
            updatedTags[tagIndexAmongAll].isSelected = updatedIsSelected

            setTags(updatedTags);
        }

        const tagIndex = resultingPromt.findIndex(t => t.title === tag);

        if (tagIndex != -1) {
            setResultingPrompt([
                ...resultingPromt.slice(0, tagIndex),
                ...resultingPromt.slice(tagIndex + 1)]);
        } else {
            setResultingPrompt([...resultingPromt, { "title": tag, "section": section }])
        };

        console.log(tags)
        console.log(resultingPromt)
    }

    const inputCustomTag = (event) => {
        if (event.key === 'Enter') {

            const newTag = event.target.value
            const tagIndex = resultingPromt.findIndex(t => t.title === newTag);

            if (tagIndex != -1) {
            } else {
                setResultingPrompt([...resultingPromt,
                { title: newTag, section: "custom", isSelected: true }
                ])
            };
        }
    }

    return (
        <div>
            <div className={styles.clue_tags_container}>
                <Collapse defaultActiveKey={['Стили']} onChange={onChange}>
                    {tagSections.map((section) => (
                        <Panel header={section} key={section}>
                            <div className={styles.tags}>
                                {tags.map((tag) => (
                                    (tag.section === section) &&
                                    <Tag
                                        key={tag.title}
                                        tag={tag.title}
                                        section={section.section_title}
                                        updateData={updateData}
                                        isSelected={tag.isSelected}
                                    />
                                ))}
                            </div>
                        </Panel>
                    ))}
                </Collapse>
            </div>

            <div className={styles.resulting_tags_prompt}>
                <div className={styles.tags}>
                    {resultingPromt.map((tag) => (
                        <ResultingPromptTag
                            key={tag.title}
                            tag={tag.title}
                            section={tag.section}
                            updateData={updateData} />
                    ))}
                </div>
            </div>

            <div className={styles.inpt_section}>
                <input className={styles.tags_inpt}
                    onKeyDown={inputCustomTag} />

                <div className={styles.upload_icon}>

                </div>
            </div>

            <div className={styles.btn_section}>
                <button className={styles.generate_btn}>Генерация</button>

                <div className={styles.upload_icon}>

                </div>
            </div>
        </div >
    )
}
