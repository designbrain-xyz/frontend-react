import styles from "@/styles/Prompt.module.css"
import Tag from "./Tag"
import { Collapse } from 'antd';
import { useRef, useState } from "react";
import ResultingPromptTag from "./ResultingPromptTag";
import { Popover } from 'antd';

import { Modal, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const { Panel } = Collapse;

const onChange = (key) => {
    console.log(key);
};

export default function Prompt({ generate, serverTags, serverSections, mode, prediction }) {

    const [tags, setTags] = useState(serverTags)
    const [tagSections, setTagSections] = useState(serverSections)

    const tagInput = useRef(null);

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const [resultingPromt, setResultingPrompt] =
        useState([
            {
                title: "classic style",
                section: "Styles"
            },
            {
                title: "neoclassical style",
                section: "Styles"
            },
            {
                title: "provence style",
                section: "Styles"
            }
        ])

    const updateData = (tag, section) => {

        console.log("Resulting Prompt 1", resultingPromt)

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

        console.log("Resulting Prompt 2", resultingPromt)
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

            tagInput.current.value = '';
        }
    }

    const generateRequest = () => {
        const request_array = resultingPromt.map((item) => { return item.title })
        const request_string = request_array.join(", ")

        generate(request_string, imageUrl, mode)
    }

    return (
        <div>
            <div className={styles.clue_tags_container}>
                <Collapse defaultActiveKey={['Styles']} onChange={onChange}>
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
                <input
                    ref={tagInput}
                    className={styles.tags_inpt}
                    onKeyDown={inputCustomTag}
                    placeholder="Type your prompt…" />

                {mode != "Generate" && <div >

                    <Upload
                        customRequest={({ onSuccess }) => setTimeout(() => { onSuccess("ok", null); }, 0)}
                        className="upload"
                        listType="picture-card"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : uploadButton}
                    </Upload>

                </div>}

            </div>

            <div className={styles.btn_section}>


                {(mode != "Generate" && !imageUrl ||
                    (prediction != null && prediction.status !== "succeeded" &&
                        prediction.status !== "failed")) ? (
                    <Popover title="Please upload photo up to 2MB">
                        <button
                            className={styles.generate_btn_disabled}
                        >GENERATE
                        </button>

                    </Popover>
                ) : (< button
                    className={styles.generate_btn}
                    onClick={generateRequest}
                >GENERATE
                </button>)
                }



                {/* <div className={styles.tool_icon}>
                    <ToolIcon />
                </div> */}
            </div>
        </div >
    )
}
