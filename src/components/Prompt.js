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

export default function Prompt({ tags }) {

    console.log(tags)
    const [resultingPromt, setResultingPrompt] = useState(["классика", "неоклассика", "прованс"])

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
                <Collapse defaultActiveKey={['2']} onChange={onChange}>
                    {tags.map((section) => (
                        <Panel header={section.section_title} key={section.id}>
                            <div className={styles.tags}>
                                {section.tags.map((tag) => (
                                    <Tag
                                        key={tag.title}
                                        tag={tag.title}
                                        updateData={updateData}
                                        isInitiallySelected={tag.isSelected}
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
                            key={tag}
                            tag={tag}
                            updateData={updateData} />
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
        </div >
    )
}
